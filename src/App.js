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
        <img src="" alt="logo" />
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
