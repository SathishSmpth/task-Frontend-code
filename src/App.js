import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Login from "./components/Login.js";
import Post from "./components/Post.js";
import LoginPage from "./components/LoginPage.js";
import SetDate from "./components/setDate.js";
import GetDetailByDate from "./components/getDetailByDate";

const App = () => {
  const [date,setDate] = useState("")
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Post />} />
        <Route path="/user/:id" element={<LoginPage />} />
        <Route path="/setdate" element={<SetDate setDate={setDate}/>} />
        <Route path="/getdetailbydate" element={<GetDetailByDate getDetailByDate={date}/>} />
      </Routes>   
    </div>
  );
}

export default App;
