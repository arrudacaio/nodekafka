// Vai receber as mensagens do kafka
// Não coloquei o express pois o microserviço não será 
// acessível via REST
import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'invoice'
})

const topic = 'issue-invoice'
// O consumer sempre pertence a um grupo de consumers
const consumer = kafka.consumer({ groupId: 'invoice-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const prefix = `${topic}${partition} | ${message.offset} / ${message.timestamp}`

      console.log(`- ${prefix} ${message.key}#${message.value}`)

    }
  })
}




run().catch(console.error)