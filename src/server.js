require("express-async-errors")

const cors = require("cors");
const express = require("express")

const routes = require("./routes");
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")

const app = express();

app.use(cors());

// app.use( (req, res, next) => {
//   d = new Date()
//   console.log(`${d.getHours()}:${d.getMinutes()} 
//     - requested: ${req.url} 
//     - method: ${req.method}`);

//   next()
// })

app.use(express.json());
app.use(routes);
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use("/assets", express.static(uploadConfig.ASSETS_FOLDER));

app.use((error, request, response, next) => {

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  })
})

const PORT = 3333;

app.listen(PORT, () => console.log(`🥕  Server is running on port ${PORT}`));