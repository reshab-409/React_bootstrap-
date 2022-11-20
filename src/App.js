import React from 'react';
import MyForm from './MyForm';
import Navbar2 from './navbar2';
import Photo from './carosel';
import Footer2 from './footer2';
import About from './about'
import StudentList from './studentList'
import Cources from './courses';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from './course';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar2 title="CodeWithReshab" />
        <Routes>
          <Route exact path="/" element={<><MyForm /><Photo /></>}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/studentList" element={<StudentList />}/>
          <Route exact path="/courses" element={<Cources />}/>
          <Route exact path="/course" element={<Course />}/>
        </Routes>
        <Footer2 />
      </div>
    </Router>
  );
}
export default App;