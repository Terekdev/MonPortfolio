import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

const RoutesURL = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/projet/:id" element={<Projet />} />
                <Route path="*" element={<NoReach />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesURL;