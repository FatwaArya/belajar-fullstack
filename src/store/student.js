import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      major: "Computer Science",
      college: "University of Texas at Austin",
    },
    {
      name: "Fatwa Aryasatya Akbar",
      email: "fatwa@gmail.com",
      major: "Computer Science",
      college: "University of Indonesia",
    },
    {
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
      state.student.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.student = state.student.filter(
        (student) => student.email !== action.payload
      );
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
