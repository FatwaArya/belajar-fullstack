import express from "express";
import axios from "axios";

const postInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

var router = express.Router();

router.get("/posts", async (req, res) => {
  const { data } = await postInstance.get("/posts");
  res.send(data);
});

router.get("/posts/:id", async (req, res) => {
  try {
    const { data } = await postInstance.get(`/posts/${req.params.id}`);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/posts", async (req, res) => {
  try {
    const { data } = await postInstance.post("/posts", req.body);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.put("/posts/:id", async (req, res) => {
  const id = req.params.id;

  const { data } = await postInstance.put(`/posts/${Number(id)}`, req.body);
  res.send(data);
});

router.delete("/posts/:id", async (req, res) => {
  const { data } = await postInstance.delete(`/posts/${req.params.id}`);
  res.send(data);
});

export default router;
