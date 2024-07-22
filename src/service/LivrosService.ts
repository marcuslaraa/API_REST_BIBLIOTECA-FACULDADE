import { executaComandoSQL } from '../database/mysql'
import { LivroModel } from '../model/LivroModel'
import { LivrosRepository } from '../repository/LivrosRepository'

export class LivrosService {
  livrosRepository = new LivrosRepository()

  // async listarLivros() {
  //   const existemLivros = await this.livrosRepository.listarLivros()
  //   if (existemLivros.length > 0) {
  //     return existemLivros
  //   } else {
  //     throw new Error('Não existem livros cadastrados.')
  //   }
  // }

  async cadastrarLivro(livro: LivroModel) {
    const { title, author, publishedDate, isbn, pages, language, publisher } = livro

    if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher) throw new Error('Informações Incompletas.')

    const existeLivro: LivroModel = await this.livrosRepository.consultarlivroPorIsbn(isbn)
    if (existeLivro) throw new Error('Livro já existe na biblioteca.')

    const novoLivro = await this.livrosRepository.cadastrarLivro(livro)
    return novoLivro
  }


  async consultarlivroPorId(id: any) {
    const existeLivro = await this.livrosRepository.consultarlivroPorID(id)
    if (existeLivro) return existeLivro

    throw new Error('Livro não encontrado')
  }

  // atualizarLivro(livro: LivroModel): LivroModel {
  //   const { title, author, publishedDate, isbn, pages, language, publisher } = livro

  //   if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher) throw new Error('Informações Incompletas.')

  //   let livroEncontrado = this.consultarlivroPorIsbn(isbn)
  //   if (livroEncontrado) {
  //     livroEncontrado.author = author
  //     livroEncontrado.title = title
  //     livroEncontrado.publishedDate = publishedDate
  //     livroEncontrado.pages = pages
  //     livroEncontrado.language = language
  //     livroEncontrado.publisher = publisher
  //     this.livrosRepository.atualizarLivro(livroEncontrado)
  //   } else {
  //     throw new Error('Livro não encontrado.')
  //   }

  //   return livroEncontrado
  // }
}