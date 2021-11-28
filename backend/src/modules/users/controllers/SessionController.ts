import { Request, Response } from "express";
import  CreateSessionService  from "../services/CreateSessionService";

export class SessionController{
  public async create(request: Request, response: Response): Promise<Response>{
    let createSessionService = new CreateSessionService()
    
    let { email, password} = request.body

    const user = await createSessionService.execute({
      email, password
    })
    return  response.json(user)
  }
}
