const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const home = require("./controllers/homeController");

const app = express();

app.use(
  cors({
    origin: "https://proyecto-cafeteria-backend.onrender.com/",
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use(express.json());

app.use("/api", home);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

module.exports = app;
