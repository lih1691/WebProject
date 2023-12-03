import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ScrollToTop from "@lib/scroll/ScrollTop";

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path={"*"} element={<App />}/>;
            </Routes>
        </BrowserRouter>
    );
};

export default Root;