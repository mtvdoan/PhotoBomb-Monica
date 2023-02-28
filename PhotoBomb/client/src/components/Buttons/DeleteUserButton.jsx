import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const DeleteUserButton = ({ user }) => {
    const navigate = useNavigate();
    const [usersList, setUsersList] = useState([]);
    console.log("What is my user id?", user._id);
    const userId = user._id;
    console.log("ideee", userId);
    const handleDeleteUser = (e, userId) => {
        e.preventDefault();
        axios
            .delete("http://localhost:8000/api/users/delete/" + userId)
            .then(() => {
                console.log("Successfully deleted user from backend");
                removeFromDom(userId);
                navigate("/login");
            })
            .catch((err) =>
                console.log(
                    "Something went wrong trying to delete the user",
                    err
                )
            );
    };

    const removeFromDom = (userId) => {
        setUsersList(usersList.filter((u) => u._id !== userId));
        alert(`User has been deleted`);
    };

    return (
        <>
            <div>
                <div>
                    <button
                        type="submit"
                        onClick={(e) => handleDeleteUser(e, userId)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:animate-pulse"
                    >
                        Delete User
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeleteUserButton;
