import { getCustomRepository } from "typeorm";
import { Car } from "../typeorm/entities/Car";
import CarRepository from "../typeorm/repositories/CarRepository";

export default class ListCarServices {
  public async execute(): Promise<Car[]> {

    const carRepository = getCustomRepository(CarRepository);

    const cars = await carRepository.find();

    return cars;

  }
}