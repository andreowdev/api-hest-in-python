import { pool } from "../config/db.js";

export const getAllCategoria = async() =>{
    const [rows] = await pool.query("SELECT * FROM categoria");
    return rows || null;
}

export const getCategoriasById = async(idCategoria) =>{
    const [rows] = await pool.query("SELECT * FROM categoria WHERE idCategoria =?" [idCategoria]);
    return rows[0] || null;
}
