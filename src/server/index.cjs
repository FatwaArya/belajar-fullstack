const express = require("express");
const studentRouter = require("./routers/student.cjs");
const siswaRouter = require("./routers/siswa.cjs");
const redisRouter = require("./routers/redis.cjs");
const cors = require("cors");
const app = express();
const schedule = require("node-schedule");
const Log = require("./models/index.cjs").log;
const uuid = require("uuid");
const { consumeQueue, produceQueue } = require("./broker.cjs");
require("./db/mongoose.cjs");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1/mongoose", studentRouter);
app.use("/api/v1/sequelize", siswaRouter);
app.use("/api/v1/redis", redisRouter);

//schedule job every 5 minute
const job = schedule.scheduleJob("*/5 * * * *", async () => {
  const data = {
    msg: uuid.v4(),
    waktu_sekarang: new Date(),
  };
  await Log.create(data);

  console.log("job running");
});

job.invoke();

app.get("/rabbitmq", async (req, res) => {
  //send to queue
  produceQueue("Product", "Pasta gigi", () => {
    console.log("send to queue");
  });

  res.send("Pasta gigi");
});

//consume queue
consumeQueue("Product", (ch, msg) => {
  console.log("consume queue");
  const message = JSON.parse(msg.content.toString());
  console.log("recevied msg: " + message);
  ch.ack(msg);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//export redisClient
