import { executionAsyncResource } from "async_hooks"
import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/errors/AppError";
import { ProductRepository } from "../typeorm/repositories/ProductRepository"

export class DeleteProductService {
  public async execute(id: number): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);

    const productExists = await productRepository.findOne(id);
    if (!productExists) {
      throw new AppError(`Produto não existe`, 400)
    }

    await productRepository.remove(productExists)
  }
}