// Importing Post model from ../models directory
const { User } = require("../models");
// Array of dummy blog post data
const userData = [
  {
    username: "kevin2659",
    email: "kevin2659@example.com",
    password: "password1",
  },
  {
    username: "cory254",
    email: "cory254@example.com",
    password: "password2",
  },
  {
    username: "anthony148",
    email: "anthony148@example.com",
    password: "password3",
  },
  {
    username: "dylan1619",
    email: "dylan1619@example.com",
    password: "password4",
  },
  {
    username: "stephanie4414",
    email: "stephanie4414@example.com",
    password: "password5",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;