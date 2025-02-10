import { getAllProdutos, getProdutoById } from "../models/produtosModel.js";

export const listarProdutos = async (req, res) => {
  try {
    const produtos = await getAllProdutos();
    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

export const buscarProduto = async (req, res) => {
  try {
    const { idProduto } = req.params;

    if (!idProduto) {
      return res.status(400).json({ error: "idProduto é obrigatório" });
    }

    const produto = await getProdutoById(idProduto);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
};
