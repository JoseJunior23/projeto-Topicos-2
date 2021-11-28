import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/errors/AppError";
import CarRepository from "../typeorm/repositories/CarRepository";


export default class DeleteCarService {
  public async execute(id: string): Promise<void> {
    const carRepository = getCustomRepository(CarRepository);

    const carExists = await carRepository.findOne(id);
    if (!carExists) {
      throw new AppError(`Automivel não existe`, 400)
    }

    await carRepository.remove(carExists)
  }
}