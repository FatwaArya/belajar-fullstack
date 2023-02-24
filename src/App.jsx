import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import StudentPage from "./pages/studentPage";
import StudentForm from "./components/studentForm";
import Layout from "./components/layout";

function App() {
  return (
    <>
      {/* route to login */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* layout */}
        <Route element={<Layout />}>
          <Route path="/students" element={<StudentPage />} />
          <Route path="/students/news" element={<StudentForm />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
