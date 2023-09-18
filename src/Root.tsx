import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import App from "./App";
import { store } from '@redux/store';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"*"} element={<App />}/>;
            </Routes>
        </BrowserRouter>
    );
};

export default Root;