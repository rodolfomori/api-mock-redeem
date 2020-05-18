class RedeemController {
  async store(req, res) {
    console.log(req.headers);
    console.log('body ', req.body);
    try {
      return res.status(200).json({
        data: {
          responseCode: 10,
        },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }

  async resume(req, res) {
    console.log(req.body);

    try {
      return res.status(200).json({
        data: {
          responseCode: 10,
        },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new RedeemController();
