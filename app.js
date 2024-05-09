const express = require("express");
const app = express();
const port = 3000;

// Rutas
const userRoutes = require("./routes/user.routes")

//Middlewares
app.use(express.json()); // Para parsear el body de las peticiones

/******RUTAS ******/

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("");
});

//API
app.use('/api/user',userRoutes);


// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
