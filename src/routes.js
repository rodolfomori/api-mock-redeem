import { Router } from 'express';

import OrderController from './app/controllers/OrderController';
import ProductsController from './app/controllers/ProductController';
import SendMFAController from './app/controllers/SendMFAController';
import ReceiveMFAController from './app/controllers/ReceiveMFAController';
import UserController from './app/controllers/UserController';
import RedeemControler from './app/controllers/RedeemControler';

const routes = new Router();

routes.post('/validate/investment', OrderController.store);
routes.post('/invest', OrderController.resume);

routes.post('/products', ProductsController.store);

routes.put('/generate/mfa', SendMFAController.store);
routes.put('/validate/mfa', ReceiveMFAController.store);

routes.post('/get-customer-profile', UserController.store);

routes.post('/validate/redeem', RedeemControler.store);
routes.post('/redeem', RedeemControler.resume);

export default routes;
