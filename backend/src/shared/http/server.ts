import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import 'reflect-metadata';
import { AppError } from "../errors/AppError";
import '../typeorm/connection';
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Erro interno do servidor'
    });
  }

)
app.listen(3333, () => console.log("✅ Server running on http://localhost:3333 !!!"))
