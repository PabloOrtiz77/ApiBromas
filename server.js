const express = require("express");

require("./config/mongoose.config");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Bromasroutes = require("./routes/Bromas.routes");

app.use("/api/jokes", Bromasroutes);

app.listen(port);
console.log(`Servidor corriendo en el puerto ${port}`);
