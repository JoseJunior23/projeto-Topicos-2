import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/errors/AppError";
import { Car } from "../typeorm/entities/Car";
import CarRepository from "../typeorm/repositories/CarRepository";

export default class ShowCarServices {
  public async execute(id: string): Promise<Car> {

    const carRepository = getCustomRepository(CarRepository);

    const car = await carRepository.findOne(id);
    if (!car) {
      throw new AppError(`Automivel não existe`, 400)
    }

    return car;

  }
}