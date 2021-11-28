import { Request, Response } from "express";
import CreateCarService from "../services/CreateCarServices";
import DeleteCarService from "../services/DeleteCarServices ";
import ListCarServices from "../services/ListCarServices ";
import ShowCarServices from "../services/ShowCarServices";
import UpdateCarService from "../services/UpdateCarServices";

export default class CarController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCar = new ListCarServices();
    const cars = await listCar.execute();
    return response.json(cars);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showCar = new ShowCarServices();
    const car = await showCar.execute(id);
    return response.json(car);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, year, model, brand } = request.body;
    const createCar = new CreateCarService();
    const car = await createCar.execute({name,year,model,brand})
    return response.json(car)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, year, model, brand } = request.body;
    const updateCar = new UpdateCarService();
    const car = await updateCar.execute({
      id,
      name,
      year,
      model,
      brand
    });
    return response.json(car);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteCar = new DeleteCarService();
    await deleteCar.execute(id);
    return response.json({ message: `Automovel deletado com sucesso !!!` })


  }
}