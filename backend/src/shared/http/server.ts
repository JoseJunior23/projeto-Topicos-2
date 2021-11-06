import cors from "cors";
import express from "express";
import 'reflect-metadata';
import { routerProduct } from "../../modules/products/routes/routes.product";
import '../typeorm/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerProduct);

app.listen(3333, () => console.log("✅ Sevidor Up and Running !!!"))
