import express from 'express'
import { Kafka, logLevel } from 'kafkajs'
import routes from './routes/routes'

const app = express()


// Responsável pela conexão com o kafka
const kafka = new Kafka({
  clientId: 'api-principal',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  retry: {
    initialRetryTime: 300,
    retries: 10
  }
})

const producer = kafka.producer()


// Disponibilizando o producer para todas as rotas
app.use((req, _, next) => {
  req.producer = producer

  next()
})



// Cadastra as rotas da aplicação
app.use(routes)


const run = async () => {
  await producer.connect()
  app.listen(3333)

}

run().catch(console.error)
