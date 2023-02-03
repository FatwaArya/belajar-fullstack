//test card component
import React from "react";
import Student from "../components/student";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import configureStore from "redux-mock-store";
import { nanoid } from "@reduxjs/toolkit";
import StudentForm from "../components/studentForm";
import "@testing-library/jest-dom/extend-expect";

const student = [
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
];

// test student component
describe("Student component", () => {
  const mockStore = configureStore([]);
  let store;
  beforeEach(() => {
    store = mockStore({
      student: {
        students: student,
      },
    });
  });
  it("should render student component", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Student student={student[0]} />
      </Provider>
    );
    expect(getByText("Leslie Alexander")).toBeInTheDocument();
    expect(getByText("leslie.alexander@example.com")).toBeInTheDocument();
    expect(getByText("Computer Science")).toBeInTheDocument();
    expect(getByText("University of Texas at Austin")).toBeInTheDocument();
  });

  it("should delete student", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Student student={student[0]} />
      </Provider>
    );
    fireEvent.click(getByTestId("delete"));
    expect(getByTestId("delete")).toBeInTheDocument();
  });
});
