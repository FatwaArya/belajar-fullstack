const express = require("express");
const studentRouter = require("./routers/student.cjs");
const siswaRouter = require("./routers/siswa.cjs");

const app = express();
require("./db/mongoose.cjs");

const port = 3000;

app.use(express.json());
app.use("/api/v1/mongoose", studentRouter);
app.use("/api/v1/sequelize", siswaRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
