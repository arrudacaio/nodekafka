import express from 'express'

const routes = express.Router()


// Onde será lançado o pedido da invoice para o topico
routes.post('/invoices', async (req, res) => {

  const { producer } = req

  // Criando a mensagem no tópico para emitir a invoice
  const message = {
    user: { id: 1, name: 'Caio Arruda' },
    itens: [{ name: 'Riot Points', price: 45.00, taxPrice: 0.5 }],
    city: 'Campina Grande',
    state: 'Paraíba'
  }

  await producer.send({
    topic: 'issue-invoice',
    messages: [{ value: JSON.stringify(message) }]
  })

  return res.json({ ok: true })

})

export default routes