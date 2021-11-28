import { Router } from "express";
import isAuthenticated from "../../../shared/middleware/isAuthenticated";
import CarController from "../controllers/CarController";

const carRouter = Router();
const carController = new CarController();

carRouter.get('/', isAuthenticated, carController.index);
carRouter.get('/:id', carController.show);
carRouter.post('/', carController.create);
carRouter.put('/:id', isAuthenticated, carController.update);
carRouter.delete('/:id', carController.delete);

export default carRouter