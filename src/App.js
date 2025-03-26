import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

//import React, { useState } from "react";
//import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css"; // Import default styles

const App = () => {
  //const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path = "/" element= {<Home/>}></Route>
          <Route exact path = "/adduser" element= {<AddUser/>}></Route>
          <Route exact path = "/edituser/:id" element= {<EditUser/>}></Route>
          <Route exact path = "/viewuser/:id" element= {<ViewUser/>}></Route>
        </Routes>

      </Router>
    </div>
  );
};

export default App;