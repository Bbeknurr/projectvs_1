import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'; // Импорт заголовка
import Home from './components/home';
import Products from './components/products';
import About from './components/about';  
import Contact from './components/contact';
import Login from './components/login';
import UserList from './UserList';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/users" element={<UserList />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};


export default App;