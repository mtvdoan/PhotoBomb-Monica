import React, { useState, useEffect, useContext } from "react";
import Boop from "../../styles/Boop";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoggedInAsButton = (props) => {
    const { user } = useContext(UserContext);
    const [usersList, setUsersList] = useState([]);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/")
            .then((res) => {
                console.log("RES!", res.data);
                console.log(user);
                setUsersList(res.data);
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }, []);
    console.log("list", usersList);
    return (
        <>
            <div className="flex md:order-2">
                <Boop rotation={"5"} timing={"200"}>
                    <div className="flex bg-teal-400 hover:bg-teal-700 text-white text-lg m-4 p-2 rounded-lg shadow-lg self-center tracking-tighter font-extrabold font-semibold whitespace-nowrap dark:text-white">
                        <div className="mr-2 text-white text-lg">
                            Logged in as:
                        </div>
                        <div>{user["firstName"]}</div>
                    </div>
                </Boop>
            </div>
        </>
    );
};

export default LoggedInAsButton;
