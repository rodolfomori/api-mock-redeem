import { RF, Wallet } from '../Mocks/products';

class ProductsController {
  async store(req, res) {
    console.log(req.body);

    try {
      return res.status(200).json(Wallet);
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    // if (req.body.typeProduct === 'RF') {
    //   return res.status(200).json(RF);
    // }

    // if (req.body.typeProduct === 'FI') {
    //   return res.status(200).json(Wallet);
    // }
  }
}

export default new ProductsController();
