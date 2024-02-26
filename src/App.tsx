import React from 'react';
import './App.css';
import { Person,Country} from './Person';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div className="App">
    TypeScript | React Type Safety
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
        country={ Country.India}
      />
      <br />
      <Router>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/contact"> Contact </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
