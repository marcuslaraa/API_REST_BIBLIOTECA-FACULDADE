"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosService = void 0;
const LivrosRepository_1 = require("../repository/LivrosRepository");
class LivrosService {
    constructor() {
        this.livrosRepository = new LivrosRepository_1.LivrosRepository();
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
    // async listarLivros() {
    //   const existemLivros = await this.livrosRepository.listarLivros()
    //   if (existemLivros.length > 0) {
    //     return existemLivros
    //   } else {
    //     throw new Error('Não existem livros cadastrados.')
    //   }
    // }
    cadastrarLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = livro;
            if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher)
                throw new Error('Informações Incompletas.');
            const existeLivro = yield this.livrosRepository.consultarlivroPorIsbn(isbn);
            if (existeLivro)
                throw new Error('Livro já existe na biblioteca.');
            const novoLivro = yield this.livrosRepository.cadastrarLivro(livro);
            return novoLivro;
        });
    }
    consultarlivroPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existeLivro = yield this.livrosRepository.consultarlivroPorID(id);
            if (existeLivro)
                return existeLivro;
            throw new Error('Livro não encontrado');
        });
    }
}
exports.LivrosService = LivrosService;
