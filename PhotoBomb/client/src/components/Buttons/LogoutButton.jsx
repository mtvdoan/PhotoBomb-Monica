import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const LogoutButton = (props) => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    // const {user, setUser} = useContext();
    console.log(user);
    const handleLogOut = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/users/logout")
            .then((res) => {
                setLoggedIn(false);
                console.log(`Logging out!`);
                alert("User has logged out!");
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div>
                <div>
                    <button
                        onClick={handleLogOut}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default LogoutButton;
