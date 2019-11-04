import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Departments from './components/Departments'
import Database from './data/database.json'
import Menu from './components/Menu'
import './App.css';



function App() {
  const [departments, setDepartments] = useState(Database.departments);
  return (
    <div className="App">
      <header>
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>
        Market for Small Businesses
      </header>
      <nav><Menu departments={departments}/></nav>
      <main>
        <section id="departmentContents">
          Department Contents
        </section>
        <section id="shoppingCart">
          Shopping Cart
        </section>
      </main>
      <footer>Copyright &copy;2019 Carlos Ferraz</footer>
    </div>
  );
}

export default App;
