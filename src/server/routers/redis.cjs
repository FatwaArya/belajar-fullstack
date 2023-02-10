//use redis
const express = require("express");
const redis = require("redis");
const redisClient = redis.createClient();
const axios = require("axios");
const Student = require("../model/student.cjs");

const router = express.Router();

router.get("/students", async (req, res) => {
  //use redis
  try {
    redisClient.get("students", async (err, data) => {
      if (err) throw err;

      if (data !== null) {
        console.log(data);
        res.send(data);
      } else {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        // const students = await Student.find({});
        // redisClient.setex("students", 3600, students);
        redisClient.setex("students", 3600, JSON.stringify(data));
        res.send(data);
      }
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;
