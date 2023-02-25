import "./App.css";
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/Pages/LoginPage';
import HomePage from './components/Pages/HomePage';
import TestConfirmPage from './components/Pages/TestConfirmPage';
function App() {
      const [authorized, setAuthorized] = useState("");
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>} authorized={authorized} setAuthorized={setAuthorized}/>
                    <Route path="/testConfirmPage" element={<TestConfirmPage/>} authorized={authorized} setAuthorized={setAuthorized}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
