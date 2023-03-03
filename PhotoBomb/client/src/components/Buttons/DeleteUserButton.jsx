import React, { useEffect, useState, useContext } from "react";
import {UserContext} from "../../context/UserContext";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const DeleteUserButton = ({ user }) => {
    const { setUser } = useContext(UserContext);
    const{id} = useParams();
    const navigate = useNavigate();
    const [usersList, setUsersList] = useState([]);
    const handleDeleteUser = (e) => {
        e.preventDefault();
        axios
            .delete("http://localhost:8000/api/users/delete/" + user.id)
            .then(() => {
                console.log("Successfully deleted user from backend");
                removeFromDom(user._id);
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
                        onClick={(e) => handleDeleteUser(e)}
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
