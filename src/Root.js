import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider } from 'react-redux';
import App from "./App";

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"*"} element={<App />}/>;
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default Root;