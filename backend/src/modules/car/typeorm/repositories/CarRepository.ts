import { EntityRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";

@EntityRepository(Car)
export default class CarRepository extends Repository<Car>{
  public async findByName(name: string): Promise<Car | undefined> {
    let car = this.findOne({
      where: {name}
    });
  return car
  }
}