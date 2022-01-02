import express from 'express'
// import Kafka from 'kafkajs'

const app = express()

// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['kafka1:9092', 'kafka2:9092']
// })

app.post('/invoices', (req, res) => {
  // Call to a microservice

  return res.json({ ok: true })
})

app.listen(3333)