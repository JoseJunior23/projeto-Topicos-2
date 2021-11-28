import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";

export default class ListUserService{
  public async execute():Promise<User[]>{
    let userRepository = getCustomRepository(UserRepository)
    const users = userRepository.find()
    return users
  }
}