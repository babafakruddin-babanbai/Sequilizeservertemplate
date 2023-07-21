const User = require("../models/example");

// DAO (Data Access Object) functions for the User model
const UserDao = {
  async createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error("Error creating user:", error);
    }
  },

  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error("Error getting all users:", error);
    }
  },

  async getUserByEmail(email) {
    try {
      const user = await User.findByPk(email);
      return user;
    } catch (error) {
      throw new Error("Error getting user by email:", error);
    }
  },

  async updateUser(email, updatedData) {
    try {
      const user = await User.findByPk(email);
      if (!user) {
        throw new Error("User not found");
      }
      const updatedUser = await user.update(updatedData);
      return updatedUser;
    } catch (error) {
      throw new Error("Error updating user:", error);
    }
  },

  async deleteUser(email) {
    try {
      const user = await User.findByPk(email);
      if (!user) {
        throw new Error("User not found");
      }
      await user.destroy();
      return true;
    } catch (error) {
      throw new Error("Error deleting user:", error);
    }
  },
};

module.exports = UserDao;
