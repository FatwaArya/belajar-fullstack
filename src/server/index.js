import express from "express";

const app = express();
import userRouter from "./routers/user.js";
import postRouter from "./routers/post.js";
const port = 3000;

app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
