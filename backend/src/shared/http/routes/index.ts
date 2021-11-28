import { Router } from "express";
import carRouter from "../../../modules/car/routes/routes.car";
import productRouter from "../../../modules/products/routes/routes.product";
import { sessionRouter } from "../../../modules/users/routes/routes.session";
import { userRouter } from "../../../modules/users/routes/routes.user";

const routes= Router();

routes.use('/product', productRouter);
routes.use('/user', userRouter)
routes.use('/session', sessionRouter)
routes.use('/car', carRouter)


export default routes;