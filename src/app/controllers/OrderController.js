import * as Yup from 'yup';

class OrderController {
  async store(req, res) {
    console.log(req.headers);
    console.log('body ', req.body);
    try {
      return res.status(200).json({
        data: {
          responseCode: 13,
          info: {
            qualified: false,
            fundMembershipTerm: false, // termo de adesão do fundo
            suitability: true,
          },
        },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async resume(req, res) {
    // const schema = Yup.object().shape({
    //   investData: Yup.object().required(),
    // });

    console.log(req.headers.authorization);

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validations Fails' });
    // }

    try {
      return res.status(200).json({
        data: {
          code: 1,
          info: {
            qualified: false,
            professional: false,
            fundMembershipTerm: false, // termo de adesão do fundo
            suitability: true,
          },
        },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new OrderController();
