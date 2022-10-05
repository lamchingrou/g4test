import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from "./components/navbar"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './pages/Login.jsx'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                >
                </Route>

                <Route
                    path="/login"
                    element={<Login/>}
                >
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
,document.getElementById('root'));