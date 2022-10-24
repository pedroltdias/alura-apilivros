import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
	.get("/livro", LivroController.listarLivros);

export default router;