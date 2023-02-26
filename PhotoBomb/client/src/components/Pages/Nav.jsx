import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LogoutButton from "../Buttons/LogoutButton";
const Nav = ({ user, setUser }) => {
    // 3) GET THE CURRENT USER USING CREDENTIALS FROM TOKEN
    // -> You can see this token in the memory section of developer tools
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user-current`, {
                withCredentials: true,
            })
            .then((res) => {
                // show the user returned
                console.log("logged user" + res.data.firstName);
                // 4) UPDATE THE STATE WITH CORRECT DATA
                setUser(res.data);
            })
            .catch((err) => {
                console.log("current user error: " + err);
                setUser({});
            });
    }, []);

    return (
        <>
            <nav>
                {/* 4) CHECK IF USER HAS A FIRST NAME SO IT'S NOT NULL */}
                {user && user.firstName ? user.firstName : "nobody"}
                <Link to={"/login"}>Login</Link>
                <Link to={"/users"}>All Users</Link>

                {/* IF WE HAVE A VALUE IN THE STATE, WE ARE LOGGED IN -> SHOW LOGOUT */}
                {/* 5) ELSE SHOW LOGIN OPTION*/}
                {user && user.first ? (
                    <>
                        <Link to={"/users"}>All Users</Link>
                        <LogoutButton />
                    </>
                ) : (
                    <Link to={"/login"}>Login</Link>
                )}
            </nav>
        </>
    );
};

export default Nav;
