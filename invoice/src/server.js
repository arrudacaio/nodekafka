// Vai receber as mensagens do kafka
// Não coloquei o express pois o microserviço não será 
// acessível via REST
import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'invoice'
})

const topic = 'issue-invoice'
const consumer = kafka.consumer()

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic })

  await consumer.run({
    eachMessage: async((payload) => {
      console.log(`O payload completo: ${payload}`)
      // const { topic, partition, message } = payload

      // const prefix = `${topic}${partition}`
    })
  })
}




run().catch(console.error)