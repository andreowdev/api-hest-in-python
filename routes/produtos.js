import express from "express";
import { listarProdutos, buscarProduto } from "../controllers/produtosController.js";

const router = express.Router();

//produtos
router.get("/", listarProdutos);  
router.get("/:idProduto", buscarProduto);  

export default router;
