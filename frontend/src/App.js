import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
