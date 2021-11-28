import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/errors/AppError";
import { Car } from "../typeorm/entities/Car";
import CarRepository from "../typeorm/repositories/CarRepository";

interface IRequest {
  id: string;
  name: string;
  year: number;
  model: string;
  brand: string;
}

export default class UpdateCarService {
  public async execute({ name, year, model, brand }: IRequest): Promise<Car> {

    const carRepository = getCustomRepository(CarRepository);

    const carExits = await carRepository.findOne(name);
    if (!carExits) {
      throw new AppError(`Automovél não existe`, 400)
    };

    const carName = await carRepository.findByName(name);
    if (carName) {
      throw new AppError(`Já existe um automovel com este nome`, 400);
    };
    carExits.name = name
    carExits.year = year
    carExits.model = model
    carExits.brand = brand

    await carRepository.save(carExits);
    return carExits
  };
};