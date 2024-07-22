import { LivrosService } from '../service/LivrosService'
import { Request, Response } from 'express'

const livrosService = new LivrosService()

// export const listarLivros = (req: Request, res: Response) => {
//   try {
//     res.status(200).json(livrosService.listarLivros())
//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })
//   }
// }

export const criarLivro = async (req: Request, res: Response) => {
  try {
    const novoLivro = await livrosService.cadastrarLivro(req.body)
    res.status(201).json({ mensagem: 'livro adicionado com sucesso!', novoLivro })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }

}

export const consultarLivroPorId = async (req: Request, res: Response) => {
  try {
    const consultarLivro = await livrosService.consultarlivroPorId(req.params.id)
    res.status(200).json({ mensagem: 'Livro encontrado com sucesso.', consultarLivro })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }
}

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