import { executaComandoSQL } from '../database/mysql'
import { LivroModel } from '../model/LivroModel'

export class LivrosRepository {

  constructor() {
    this.criarTabela()
  }


  imprimeResult(err: any, result: any) {
    if (result != undefined) {
      console.log('Dentro Callback')
    }
  }

  async criarTabela() {
    const query = `CREATE TABLE IF NOT EXISTS biblioteca.livros ( id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, publishedDate VARCHAR(255) NOT NULL, isbn VARCHAR(255) NOT NULL, pages INT NOT NULL, language VARCHAR(255) NOT NULL, publisher VARCHAR(255) NOT NULL)`
    try {
      const resultado = await executaComandoSQL(query, [])
      console.log('Query executada com sucesso:', resultado)
    } catch (err: any) {
      console.error('Erro ao executar a query: ', err)
    }
  }

  async cadastrarLivro(livro: LivroModel) {
    const query = 'INSERT INTO biblioteca.livros (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?,?,?,?,?,?,?)'

    try {
      const resultado = await executaComandoSQL(query, [livro.title, livro.author, livro.publishedDate, livro.isbn, livro.pages, livro.language, livro.publisher])
      const novoLivro = new LivroModel(resultado.insertId, livro.title, livro.author, livro.publishedDate, livro.isbn, livro.pages, livro.language, livro.publisher)
      return new Promise<LivroModel>((resolve) => {
        resolve(novoLivro)
      })
    } catch (err: any) {
      console.error('Erro ao inserir o produto', err)
      throw err
    }
  }

  async consultarlivroPorIsbn(isbn: string) {
    const query = 'SELECT * FROM biblioteca.livros where isbn = ?'
    try {
      const resultado = await executaComandoSQL(query, [isbn]);
      if (resultado.length === 0) {
        return null;
      }
      return resultado[0];
    } catch (err: any) {
      console.error('Falha na busca.');
      throw err;
    }
  }

  async consultarlivroPorID(id: number): Promise<LivroModel> {
    const query = 'SELECT * FROM biblioteca.livros where id = ?'
    try {
      const resultado = await executaComandoSQL(query, [id])
      return new Promise<LivroModel>((resolve) => {
        resolve(resultado)
      })
    } catch (err: any) {
      console.error('Falha na busca.')
      throw err
    }
  }


  // listarLivros() {
  //   return this.livrosList
  // }

  // criarLivro(livro: LivroModel) {
  //   this.livrosList.push(livro)
  // }

  // consultarLivroPorIsbn(isbn: string) {
  //   return this.livrosList.find((livro) => livro.isbn === isbn)
  // }

  // atualizarLivro(livro: LivroModel) {
  //   const index = this.livrosList.indexOf(livro)
  //   if (index !== -1) this.livrosList[index] = livro

  //   return index
  // }

}