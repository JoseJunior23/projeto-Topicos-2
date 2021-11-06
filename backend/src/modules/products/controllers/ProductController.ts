import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductServices";
import DeleteProductService from "../services/DeleteProductServices ";
import ListProductServices from "../services/ListProductServices ";
import ShowProductServices from "../services/ShowProductServices";
import UpdateProductservice from "../services/UpdateProductServices";


export default class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProduct = new ListProductServices();
    const products = await listProduct.execute();
    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProduct = new ShowProductServices();
    const product = await showProduct.execute(id);
    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, quantity, price } = request.body;
    const createProduct = new CreateProductService();
    const product = await createProduct.execute({
      name,
      quantity,
      price
    });
    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, quantity, price } = request.body;
    const updateProduct = new UpdateProductservice();
    const product = await updateProduct.execute({
      id,
      name,
      quantity,
      price
    });
    return response.json(product);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteProduct = new DeleteProductService();
    await deleteProduct.execute(id);
    return response.json({ message: `Produto deletado com sucesso !!!` })


  }
}