import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";

interface IRequest{
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService{
  public async execute({name, email, password}: IRequest):Promise<User>{
    let userRepository = getCustomRepository(UserRepository)

    let emailExist = await userRepository.findByEmail(email)
    if(emailExist){
      throw new AppError(`Email já existe`, 400)
    }

   let passwordCripto = await hash(password, 8)

   let newUser = userRepository.create({
     name,
     email,
     password: passwordCripto
   })

   await userRepository.save(newUser)

   return newUser
  }
}