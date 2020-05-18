import { getCustomerProfile } from '../Mocks/user';

class UserController {
  async store(req, res) {
    console.log(req.headers.authorization);

    try {
      return res.status(200).json(getCustomerProfile);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new UserController();
