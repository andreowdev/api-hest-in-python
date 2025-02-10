import express from "express";
import cors from "cors";
import produtosRoutes from "./routes/produtos.js";
import categoriasRoutes from "./routes/categorias.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/produtos", produtosRoutes); 
app.use("/categorias", categoriasRoutes);

export default app;
