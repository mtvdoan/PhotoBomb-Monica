import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const DeleteUserButton = (props) => {
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        axios
            .delete("http://localhost:8000/api/users/delete")
            .then((res) => {

                console.log(`User has been deleted!`);
                alert("User has been deleted!");
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
                        Delete User
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeleteUserButton;
