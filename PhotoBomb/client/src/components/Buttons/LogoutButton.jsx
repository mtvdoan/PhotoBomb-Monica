import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

import { useNavigate, Link } from "react-router-dom";
import Boop from "../../styles/Boop";
const LogoutButton = (props) => {
    const {setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        
        axios
            .post("http://localhost:8000/api/users/logout",{}, {withCredentials: true})
            .then((res) => {
                setUser(null);
                console.log(`Logging out!`);
                alert("User has logged out!");
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div>
                <div className="flex md:order-2">
                    <Boop rotation={"5"} timing={"200"}>
                        <div className="flex bg-red-700 hover:bg-red-900 text-white text-lg m-4 p-2 rounded-lg shadow-lg self-center tracking-tighter font-extrabold font-semibold whitespace-nowrap dark:text-white">
                            <div className="mr-2 text-white text-lg">
                                <Link onClick={handleLogOut} to={"/login"}>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </Boop>
                </div>
            </div>
        </>
    );
};

export default LogoutButton;
