import HomePage from "./pages/HomePage";
import { Login } from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { register } from "./pages/RegisterPage";
import CreateGame from "./pages/CreategamePage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={HomePage} />
        <Route path="/register" Component={register} />
        <Route path="/create" Component={CreateGame} /> 
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    </>
   
  )
}