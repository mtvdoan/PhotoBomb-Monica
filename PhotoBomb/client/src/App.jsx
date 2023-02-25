import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Pages/Nav";
import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import TestConfirmPage from "./components/Pages/TestConfirmPage";
import RegisterPage from "./components/Pages/RegisterPage";
import AllUsersPage from "./components/Pages/AllUsersPage";
import ViewUserPage from "./components/Pages/ViewUserPage";
import { UserProvider } from "./context/UserContext";
import LoggedInAsButton from "./components/Buttons/LoggedInAsButton";
import EditUserPage from "./components/Pages/EditUserPage";
import EditUserButton from "./components/Buttons/EditUserButton";
import DeleteUserButton from "./components/Buttons/DeleteUserButton";
function App() {
    const [authorized, setAuthorized] = useState("");
    // 1 ) CREATE A STATE TO SAVE THE USER
    const [user, setUser] = useState({});

    return (
        <>
            <BrowserRouter>
                <UserProvider>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route
                            path="/register"
                            element={<RegisterPage setUser={setUser} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/login"
                            element={<LoginPage setUser={setUser} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/users"
                            element={<AllUsersPage user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/user/:id"
                            element={<ViewUserPage user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/EditUserButton"
                            element={<EditUserButton user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/user/edit/:id"
                            element={<EditUserPage user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/LoggedInAsButton"
                            element={<LoggedInAsButton user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                                          <Route
                            path="/DeleteUserButton"
                            element={<DeleteUserButton user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/testConfirmPage"
                            element={<TestConfirmPage user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                    </Routes>
                </UserProvider>
            </BrowserRouter>
            {/* </main> */}
        </>
    );
}

export default App;
