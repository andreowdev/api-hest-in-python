import express from "express";
import { buscarCategoria, listarCategorias } from "../controllers/categoriaController.js";

const router = express.Router();

router.get("/", listarCategorias);
router.get("/:idCategoria", buscarCategoria);

export default router;
