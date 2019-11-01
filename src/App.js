import React from 'react';
import Departments from './components/Departments'
import Database from './data/database.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="" alt="logo" />
        Market for Small Businesses
      </header>
      <nav>Menu Options</nav>
      <main>
        <section id="departmentsMenu">
          <Departments departments={Database.departments}/>
        </section>
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
