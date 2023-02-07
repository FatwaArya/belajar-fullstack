import express from "express";
import j from "joi";
import studentSchema from "../helpers/studentSchema.js";

var router = express.Router();

const initialState = {
  student: [
    {
      id: 1,
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      major: "Computer Science",
      college: "University of Texas at Austin",
    },
    {
      id: 2,
      name: "Fatwa Aryasatya Akbar",
      email: "fatwa@gmail.com",
      major: "Computer Science",
      college: "University of Indonesia",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@gmail.com",
      major: "Computer Science",
      college: "University of Texas at Austin",
    },
  ],
};

router.get("/students", (req, res) => {
  res.send(initialState.student);
});

router.get("/students/:id", (req, res) => {
  const student = initialState.student.find(
    (student) => student.id === Number(req.params.id)
  );
  if (!student) {
    res.status(404).send("The student with the given ID was not found.");
  }
  res.send(student);
});

router.post("/students", (req, res) => {
  const { error } = studentSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const student = {
    id: initialState.student.length + 1,
    name: req.body.name,
    email: req.body.email,
    major: req.body.major,
    college: req.body.college,
  };
  initialState.student.push(student);
  res.send(initialState.student);
});

router.put("/students/:id", (req, res) => {
  const student = initialState.student.find(
    (student) => student.id === Number(req.params.id)
  );
  if (!student) {
    res.status(404).send("The student with the given ID was not found.");
  }

  const { error } = studentSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  student.name = req.body.name;
  student.email = req.body.email;
  student.major = req.body.major;
  student.college = req.body.college;
  res.send(student);
});

router.delete("/students/:id", (req, res) => {
  const student = initialState.student.find(
    (student) => student.id === Number(req.params.id)
  );
  if (!student) {
    res.status(404).send("The student with the given ID was not found.");
  }

  const index = initialState.student.indexOf(student);
  initialState.student.splice(index, 1);

  res.send("deleted student");
});

export default router;
