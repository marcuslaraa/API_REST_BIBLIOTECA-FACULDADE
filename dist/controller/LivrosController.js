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
exports.consultarLivroPorId = exports.criarLivro = void 0;
const LivrosService_1 = require("../service/LivrosService");
const livrosService = new LivrosService_1.LivrosService();
// export const listarLivros = (req: Request, res: Response) => {
//   try {
//     res.status(200).json(livrosService.listarLivros())
//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })
//   }
// }
const criarLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoLivro = yield livrosService.cadastrarLivro(req.body);
        res.status(201).json({ mensagem: 'livro adicionado com sucesso!', novoLivro });
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
});
exports.criarLivro = criarLivro;
const consultarLivroPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const consultarLivro = yield livrosService.consultarlivroPorId(req.params.id);
        res.status(200).json({ mensagem: 'Livro encontrado com sucesso.', consultarLivro });
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
});
exports.consultarLivroPorId = consultarLivroPorId;
// export const atualizarLivro = (req: Request, res: Response) => {
//   try {
//     const livroAtualizado = livrosService.atualizarLivro(req.body)
//     res.status(200).json({
//       mensagem: 'Livro atualizado com sucesso.',
//       livroAtualizado: livroAtualizado
//     })
//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })
//   }
// }
