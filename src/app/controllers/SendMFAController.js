class MFAController {
  async store(req, res) {
    console.log(req.body);

    if (!req.headers.authorization) {
      return res.status(400).json({ error: 'MFA did not Send!' });
    }
    try {
      return res.status(200).json({ message: 'MFA Sent!' });
    } catch (err) {
      return err;
    }
  }
}

export default new MFAController();
