import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentCard from "./page/dashboard"
import LoginPage from "./page/login"
import RegisterForm from "./page/register"


function App() {

  const student = {
    name: "John Doe",
    rollNo: "123456",
    dob: "2000-05-15",
    branch: "Computer Science",
    department: "Engineering",
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<StudentCard />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
