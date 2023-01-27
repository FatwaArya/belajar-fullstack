import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  student: [
    {
      id: nanoid(),
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      major: "Computer Science",
      college: "University of Texas at Austin",
    },
    {
      id: nanoid(),
      name: "Fatwa Aryasatya Akbar",
      email: "fatwa@gmail.com",
      major: "Computer Science",
      college: "University of Indonesia",
    },
    {
      id: nanoid(),
      name: "John Doe",
      email: "john.doe@gmail.com",
      major: "Computer Science",
      college: "University of Texas at Austin",
    },
  ],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.student.push({
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
        major: action.payload.major,
        college: action.payload.college,
      });
    },
    deleteStudent: (state, action) => {
      const index = state.student.findIndex(
        (student) => student.id === action.payload.id
      );
      state.student.splice(index, 1);
    },
  },
});

export const addAsyncStudent = (student) => (dispatch) => {
  setTimeout(() => {
    dispatch(addStudent(student));
  }, 1000);
};

export const selectStudent = (state) => state.student.student;

export const { addStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;
