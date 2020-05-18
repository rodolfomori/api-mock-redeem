class MFAController {
  async store(req, res) {
    console.log(req.body);

    return res.status(400).json({ success: 'MFA Ok!' });
  }
}

export default new MFAController();
