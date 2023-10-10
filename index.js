const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());


app.use("/pegawai", proxy("http://127.0.0.1:8002"));
app.use("/absen", proxy("http://127.0.0.1:8003"));
app.use("/report", proxy("http://127.0.0.1:8004"));
app.use("/", proxy("http://127.0.0.1:8001"));




app.listen(port, () => {
  console.log("Gateway is Listening to Port 8000");
});
