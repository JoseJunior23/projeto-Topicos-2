import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/errors/AppError";
import { Product } from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";

interface IRequest {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export class UpdateProductservice {
  public async execute({ id, name, quantity, price }: IRequest): Promise<Product> {

    const productRepository = getCustomRepository(ProductRepository);

    const productExits = await productRepository.findOne(id);
    if (!productExits) {
      throw new AppError(`Produto não existe`, 400)
    };

    const productName = await productRepository.findByName(name);
    if (productName) {
      throw new AppError(`Já existe um produto com este nome`, 400);
    };

    productExits.name = name
    productExits.quantity = quantity
    productExits.price = price

    await productRepository.save(productExits);
    return productExits
  };
};