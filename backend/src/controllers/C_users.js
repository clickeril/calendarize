const User = require('../models/M_users');

const UserController = {
  async getAllUsers(req, res, next) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = UserController;
