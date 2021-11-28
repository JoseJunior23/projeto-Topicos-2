import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void{
  let authHeaders = request.headers.authorization
  if(!authHeaders){
    throw new AppError(`Token não está presente`, 400)
  }
  let [, token] = authHeaders.split(` `)
  try {
    verify(token, 'ahduheuvhvhuetuhuruikfnbbvgykoçp')
    return next()
  } catch{
    throw new AppError(`Token invalido`, 400)
  }
}