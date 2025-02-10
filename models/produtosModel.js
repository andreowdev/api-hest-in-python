import { pool } from "../config/db.js";

export const getAllProdutos = async () => {
    const [rows] = await pool.query("SELECT * FROM produto");
    return rows;
};

export const getProdutoById = async (idProduto) => {
    const [rows] = await pool.query("SELECT * FROM produto WHERE idProduto = ?", [idProduto]);
    return rows[0] || null;
};

