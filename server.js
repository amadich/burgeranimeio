const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// API routes
const UserModel = require("./models/CreateUser.js");
const Register = require("./models/posts/register.js");
const Login = require("./models/posts/login.js");
const uploadanimeimg = require("./models/posts/uploadanimeimg.js");
const anime = require("./models/posts/anime.js");
const getanimes = require("./models/gets/getanimes.js");
const getseries = require("./models/gets/getseries.js");
const addeps = require("./models/posts/addeps.js");
const geteps = require("./models/gets/geteps.js");
const changeAvatar = require("./models/posts/changeAvatar.js");

getanimes(app);
getseries(app);
geteps(app);
changeAvatar(app);
uploadanimeimg(app);
addeps(app);
anime(app);
Register(app);
Login(app);

// React app route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
