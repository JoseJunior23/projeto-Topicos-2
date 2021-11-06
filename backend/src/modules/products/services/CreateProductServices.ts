import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/errors/AppError";
import { Product } from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";


interface IRequest {
  name: string;
  quantity: number;
  price: number;
}

export default class CreateProductService {
  public async execute({ name, quantity, price }: IRequest): Promise<Product> {

    const productRepository = getCustomRepository(ProductRepository);

    const productExists = await productRepository.findByName(name);
    if (productExists) {
      throw new AppError(`Já existe um produto cadastrado com este nome`, 400)
    }

    const product = productRepository.create({
      name, quantity, price
    });

    await productRepository.save(product);
    return product;
  }
}