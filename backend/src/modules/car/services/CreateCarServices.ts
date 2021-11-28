import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/errors/AppError";
import { Car } from "../typeorm/entities/Car";
import CarRepository from "../typeorm/repositories/CarRepository";

interface IRequest {
  name: string,
  year: number;
  model: string;
  brand: string;
}

export default class CreateCarService {
  public async execute({ name, year, model, brand }: IRequest): Promise<Car> {

    const carRepository = getCustomRepository(CarRepository);

    const carExists = await carRepository.findByName(name);
    if (carExists) {
      throw new AppError(`Já existe um automovel cadastrado com este nome`, 400)
    }

    const car = carRepository.create({
     name, year, model, brand
    });

    await carRepository.save(car);
    return car;
  }
}