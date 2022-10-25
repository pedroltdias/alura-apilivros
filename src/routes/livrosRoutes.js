import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
	.get("/livros", LivroController.listarLivros)
	.post("/livros", LivroController.cadastrarLivro)
	.put("/livros/:id", LivroController.atualizarLivro);

export default router;