import { EntityRepository, Repository } from "typeorm";
import { Product } from "../typeorm/entities/Product";

@EntityRepository(Product)
export class ProductRepoitory extends Repository<Product>{
  public async findByName(name: string): Promise<Product | undefined> {
    let product = this.findOne({
      where: {
        name
      }
    });
    return product
  }
}