const express = require("express");
const studentRouter = require("./routers/student.cjs");
const userRouter = require("./routers/user.cjs");
const productsRouter = require("./routers/products.cjs");
const Logger = require("./model/log.cjs");
const schedule = require("node-schedule");
const uuid = require("uuid");

const cors = require("cors");
const app = express();
require("./db/mongoose.cjs");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/v1/mongoose", studentRouter);
app.use(userRouter);
app.use(productsRouter);

job = schedule.scheduleJob("*/5 * * * *", async function () {
  //console log to see how many times it runs
  console.log("running a task every 5 minutes");

  const logger = new Logger({
    message: uuid.v4(),
    waktu_sekarang: new Date(),
  });
  await logger.save();
});
//run job
job.invoke();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//export redisClient
