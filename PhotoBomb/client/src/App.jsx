import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import TestConfirmPage from "./components/Pages/TestConfirmPage";
import RegisterPage from "./components/Pages/RegisterPage";
import AllUsersPage from "./components/Pages/AllUsersPage";
import ViewUserPage from "./components/Pages/ViewUserPage";
import { UserProvider } from "./context/UserContext";
import LoggedInAsButton from "./components/Buttons/LoggedInAsButton";
import UpdateUserPage from "./components/Pages/UpdateUserPage";
import DeleteUserButton from "./components/Buttons/DeleteUserButton";
import SearchBar from './components/Buttons/SearchBar';
import UserListSearch from './components/api/UserListSearch';
import BrowsePhotosPage  from "./components/Pages/BrowsePhotosPage";

function App() {
    const [authorized, setAuthorized] = useState("");
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
                            path="/users/:id"
                            element={<ViewUserPage user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/users/update/:id"
                            element={<UpdateUserPage user={user} />}
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
                            path="/SearchBar"
                            element={<SearchBar user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/testConfirmPage"
                            element={<TestConfirmPage user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/UserListSearch"
                            element={<UserListSearch user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/browsephotos"
                            element={<BrowsePhotosPage user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/DeleteUserButton"
                            element={<DeleteUserButton user={user} />}
                            authorized={authorized}
                            setAuthorized={setAuthorized}
                        />
                    </Routes>
                </UserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
