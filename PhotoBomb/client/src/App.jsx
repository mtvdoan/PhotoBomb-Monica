import "./App.css";
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/Pages/LoginPage';
import HomePage from './components/Pages/HomePage';
import TestConfirmPage from './components/Pages/TestConfirmPage';
import RegisterPage from "./components/Pages/RegisterPage";
import AllUsersPage from './components/Pages/AllUsersPage';
function App() {
      const [authorized, setAuthorized] = useState("");
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/register" element={<RegisterPage/>} authorized={authorized} setAuthorized={setAuthorized}/>
                    <Route path="/login" element={<LoginPage/>} authorized={authorized} setAuthorized={setAuthorized}/>
                    <Route path="/users" element={<AllUsersPage/>} authorized={authorized} setAuthorized={setAuthorized}/>
                    <Route path="/testConfirmPage" element={<TestConfirmPage/>} authorized={authorized} setAuthorized={setAuthorized}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
