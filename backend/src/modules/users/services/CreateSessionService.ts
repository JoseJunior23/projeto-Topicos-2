import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default  class CreateSessionService{
  public async execute({email, password}: IRequest): Promise<IResponse> {
    let userRepository = getCustomRepository(UserRepository)

    let user = await userRepository.findByEmail(email)
    if(!user){
      throw new AppError(`Usuário/senha invalidos`, 400)
    }

    const confirmPassword = await compare(password, user.password)
    if(! confirmPassword){
      throw new AppError(`Usuario/senha invalidos`, 400)
    }

    const token = sign({},'ahduheuvhvhuetuhuruikfnbbvgykoçp', {
      subject: user.id,
      expiresIn:'1d'
    })

    return {
      user,
      token
    }
  }
}