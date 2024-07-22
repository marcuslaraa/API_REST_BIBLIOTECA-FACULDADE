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
exports.LivrosRepository = void 0;
const mysql_1 = require("../database/mysql");
const LivroModel_1 = require("../model/LivroModel");
class LivrosRepository {
    constructor() {
        this.criarTabela();
    }
    imprimeResult(err, result) {
        if (result != undefined) {
            console.log('Dentro Callback');
        }
    }
    criarTabela() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `CREATE TABLE IF NOT EXISTS biblioteca.livros ( id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, publishedDate VARCHAR(255) NOT NULL, isbn VARCHAR(255) NOT NULL, pages INT NOT NULL, language VARCHAR(255) NOT NULL, publisher VARCHAR(255) NOT NULL)`;
            try {
                const resultado = yield (0, mysql_1.executaComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Erro ao executar a query: ', err);
            }
        });
    }
    cadastrarLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO biblioteca.livros (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?,?,?,?,?,?,?)';
            try {
                const resultado = yield (0, mysql_1.executaComandoSQL)(query, [livro.title, livro.author, livro.publishedDate, livro.isbn, livro.pages, livro.language, livro.publisher]);
                const novoLivro = new LivroModel_1.LivroModel(resultado.insertId, livro.title, livro.author, livro.publishedDate, livro.isbn, livro.pages, livro.language, livro.publisher);
                return new Promise((resolve) => {
                    resolve(novoLivro);
                });
            }
            catch (err) {
                console.error('Erro ao inserir o produto', err);
                throw err;
            }
        });
    }
    consultarlivroPorIsbn(isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM biblioteca.livros where isbn = ?';
            try {
                const resultado = yield (0, mysql_1.executaComandoSQL)(query, [isbn]);
                if (resultado.length === 0) {
                    return null;
                }
                return resultado[0];
            }
            catch (err) {
                console.error('Falha na busca.');
                throw err;
            }
        });
    }
    consultarlivroPorID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM biblioteca.livros where id = ?';
            try {
                const resultado = yield (0, mysql_1.executaComandoSQL)(query, [id]);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error('Falha na busca.');
                throw err;
            }
        });
    }
}
exports.LivrosRepository = LivrosRepository;
