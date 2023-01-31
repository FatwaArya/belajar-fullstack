import express from "express";
import axios from "axios";

const userInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

var router = express.Router();

router.get("/users", async (req, res) => {
  const { data } = await userInstance.get("/users");
  res.send(data);
});

router.get("/users/:id", async (req, res) => {
  const { data } = await userInstance.get(`/users/${req.params.id}`);
  res.send(data);
});

export default router;
