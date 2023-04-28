const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const auth_register = require("./controllers/register.controllers");
const productRoutes = require("./api/products/product");
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require("./api/products/order");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     req.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,PATCH");
//     return res.status(200).json({});
//   }
//   next();
// });

app.use("/products", productRoutes);
app.use("/order", orderRoutes);
app.use('/notes',userRoutes)

app.use("/", index);
app.get("/register", auth_register.register);

app.use((req, res, next) => {
  const error = new Error("404 not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

app.listen(5000, () => {
  console.log("app will listen on port 5000");
});

function index(req, res) {
  res.send({ msg: "first response GET" });
}
