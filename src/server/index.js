import express from "express";

const app = express();
import userRouter from "./routers/user.js";
import postRouter from "./routers/post.js";
import studentRouter from "./routers/student.js";
const port = 3000;

app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(studentRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
