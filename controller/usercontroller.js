const UserDao = require('../dao/userdao');

const UserController = {
  async createUser(req, res) {
    try {
      const { email, fullName, age, employed } = req.body;
      
      // Validation: Check if required data is provided
      if (!email || !fullName || !age || employed === undefined) {
        return res.status(400).json({ error: 'Please provide all required data.' });
      }

      // Create the user in the database
      const newUser = await UserDao.createUser({
        email,
        fullName,
        age,
        employed,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  },
};

module.exports = UserController;
