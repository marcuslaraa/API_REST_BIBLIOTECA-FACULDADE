"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const LivrosController_1 = require("./controller/LivrosController");
const LivrosRepository_1 = require("./repository/LivrosRepository");
const express_1 = __importDefault(require("express"));
const repository = new LivrosRepository_1.LivrosRepository();
repository.criarTabela();
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
const logInfo = () => {
    console.log(`API em execução no URL: http://localhost:${PORT}`);
};
app.post('/books', LivrosController_1.criarLivro);
// app.get('/books', listarLivros)
app.get('/books/:isbn', LivrosController_1.consultarLivroPorId);
// app.put('/books/:isbn', atualizarLivro)
app.listen(PORT, logInfo);
