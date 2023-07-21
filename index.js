const express = require("express");
const app = express();
const route = require("./Routes/index");
const { sq } = require("./config/db"); // Import the sequelize instance
const User = require("./models/example"); // Import the User model

// Parse incoming JSON data
app.use(express.json());

// Use the defined routes
app.use(route);

// Set the port number
const port = 5000;

// Start the server
const startServer = async () => {
  try {
    await sq.authenticate();
    await User.sync({ force: false }); // Sync the User model
    console.log("Database synchronized successfully.");
    console.log(`Server is running on port ${port}.`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }

  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
};

startServer();
