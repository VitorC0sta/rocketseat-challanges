require("express-async-errors");

const database = require("./database/sqlite");

const express = require("express");

const routes = require("./routes");
const AppError = require("./utils/AppError");

const app = express();
app.use(express.json());

app.use(routes);

database();

app.use((err, req, res, nxt) => {
  if(err instanceof AppError ) {
    return res.status(err.statusCode).json({
      "status": "error",
      "message":err.message
    });
  }
  
  console.error(err);

  return res.status(500).json({
    "status": "error",
    "message": "Internal Error"
  });
})
const PORT = 3333;
app.listen(PORT, console.log(`Server is running on PORT .:[${PORT}]`));