import express from 'express'

const routes = express.Router()


// Onde será lançado o pedido da invoice para o topico
routes.post('/invoices', (req, res) => {

  const { producer } = req

  // Criando a mensagem no tópico para emitir a invoice
  const message = {
    user: { id: 1, name: 'Caio Arruda' },
    itens: [{ name: 'Riot Points', price: 45.00, taxPrice: 0.5 }],
    city: 'Campina Grande',
    state: 'Paraíba'
  }

  return res.json({ ok: true })

})

export default routes