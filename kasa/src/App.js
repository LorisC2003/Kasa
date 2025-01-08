import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Product from './pages/Product/Product';
import About from './pages/About/About';

const App = () => (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<ErrorPage />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
);

export default App;
