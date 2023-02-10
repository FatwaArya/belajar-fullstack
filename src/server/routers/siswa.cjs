//make api using express and sequelize
const express = require("express");
const Student = require("../models/index.cjs").student;
const router = express.Router();
const redis = require("redis");
const redisClient = redis.createClient();
const axios = require("axios");

router.get("/students", async (req, res) => {
  try {
    redisClient.get("students", async (err, data) => {
      if (err) throw err;

      if (data !== null) {
        console.log(data);
        res.send(data);
      } else {
        const students = await Student.findAll();
        redisClient.setex("students", 3600, JSON.stringify(students));
        res.send(students);
      }
    });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

router.get("/students/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).send();
    }
    res.send(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post("/students", async (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    major: req.body.major,
    college: req.body.college,
  };
  try {
    await Student.create(data);
    res.status(201).send("success");
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.patch("/students/:id", async (req, res) => {
  //update
  const id = req.params.id;
  let data = {
    name: req.body.name,
    email: req.body.email,
    major: req.body.major,
    college: req.body.college,
  };

  try {
    const students = await Student.update(data, {
      where: {
        id: id,
      },
    });
    res.send("success");
  } catch (e) {
    res.send(e);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const students = await Student.destroy({
      where: {
        id: id,
      },
    });
    res.send("success");
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
