import { criarLivro, consultarLivroPorId } from './controller/LivrosController'
import { LivrosRepository } from './repository/LivrosRepository'
import express from 'express'

const repository: LivrosRepository = new LivrosRepository()
repository.criarTabela()

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

const logInfo = () => {
  console.log(`API em execução no URL: http://localhost:${PORT}`)
}

app.post('/books', criarLivro)
// app.get('/books', listarLivros)
app.get('/books/:isbn', consultarLivroPorId)
// app.put('/books/:isbn', atualizarLivro)

app.listen(PORT, logInfo)
