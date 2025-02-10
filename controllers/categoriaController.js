import {
  getAllCategoria,
  getCategoriasById,
} from "../models/categoriaModel.js";

export const listarCategorias = async (req, res) => {
  try {
    const categorias = await getAllCategoria();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar categorias" });
  }
};

export const buscarCategoria = async (req, res) => {
  try {
    const { idCategoria } = req.params;

    if (!idCategoria) {
      return res.status(400).json({ error: "idCategoria é obrigatório" });
    }

    const categoria = await getCategoriasById(idCategoria);

    if (!categoria) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    res.json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar categoria" });
  }
};
