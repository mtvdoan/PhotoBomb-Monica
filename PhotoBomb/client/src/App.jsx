import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import TestConfirmPage from "./components/Pages/TestConfirmPage";
import RegisterPage from "./components/Pages/RegisterPage";
import { UserProvider } from "./context/UserContext";
import AllUsersPage from "./components/Pages/AllUsersPage";
import ViewUserPage from "./components/Pages/ViewUserPage";
import LoggedInAsButton from "./components/Buttons/LoggedInAsButton";
import UpdateUserPage from "./components/Pages/UpdateUserPage";
import DeleteUserButton from "./components/Buttons/DeleteUserButton";
import SearchBar from "./components/Buttons/SearchBar";
import UserListSearch from "./components/api/UserListSearch";
import BrowsePhotosPage from "./components/Pages/BrowsePhotosPage";
import LogoutButton from "./components/Buttons/LogoutButton";

function App() {
    const [authorized, setAuthorized] = useState("");
    // const [user, setUser] = useState({});
    // const [jwt, setJwt] = useState("", "jwt");
    // useEffect(() => {
    //     console.log(`JWT IS: ${jwt}`);
    // }, [jwt]);

    return (
        <>
            <BrowserRouter>
                <UserProvider>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route
                            path="/register"
                            element={
                                <RegisterPage
                                    authorized={authorized}
                                    setAuthorized={setAuthorized}
                                />
                            }
                            // element={<RegisterPage setUser={setUser} />}

                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/login"
                            element={
                                <LoginPage
                                    authorized={authorized}
                                    setAuthorized={setAuthorized}
                                />
                            }
                            // element={<LoginPage setUser={setUser} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/users/logout"
                            element={
                                <LogoutButton
                                    authorized={authorized}
                                    setAuthorized={setAuthorized}
                                />
                            }
                            // element={<LoginPage setUser={setUser} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/users"
                            element={
                                <AllUsersPage setAuthorized={setAuthorized} />
                                // <RequireAuth>
                                //     <AllUsersPage />
                                // </RequireAuth>
                            }
                            // element={<AllUsersPage user={user} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/users/:id"
                            element={
                                <ViewUserPage setAuthorized={setAuthorized} />
                            }
                            // element={<ViewUserPage user={user} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/users/update/:id"
                            element={
                                <UpdateUserPage  authorized={authorized} setAuthorized={setAuthorized} />
                            }
                            // element={<UpdateUserPage user={user} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/LoggedInAsButton"
                            element={
                                <LoggedInAsButton
                                    setAuthorized={setAuthorized}
                                />
                            }
                            // element={<LoggedInAsButton user={user} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/SearchBar"
                            element={
                                <SearchBar setAuthorized={setAuthorized} />
                            }
                            // element={<SearchBar user={user} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/testConfirmPage"
                            element={
                                <TestConfirmPage
                                    setAuthorized={setAuthorized}
                                />
                            }
                            // element={<TestConfirmPage user={user} />}
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/UserListSearch"
                            element={
                                <UserListSearch setAuthorized={setAuthorized} />
                            }
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/browsephotos"
                            element={
                                <BrowsePhotosPage
                                    setAuthorized={setAuthorized}
                                />
                            }
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                        <Route
                            path="/DeleteUserButton"
                            element={
                                <DeleteUserButton
                                    setAuthorized={setAuthorized}
                                />
                            }
                            // authorized={authorized}
                            // setAuthorized={setAuthorized}
                        />
                    </Routes>
                </UserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
