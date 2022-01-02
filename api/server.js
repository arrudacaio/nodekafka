import express from 'express'

const app = express()


app.post('/invoices', (req, res) => {
  // Call to a microservice

  return res.json({ ok: true })
})

app.listen(3333)