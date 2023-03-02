import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Boop from "../../styles/Boop";
import { animated } from "react-spring";
import LogoutButton from "../Buttons/LogoutButton";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
import LoggedInAsButton from "../Buttons/LoggedInAsButton";
import UserListSearch from "../api/UserListSearch";
import CreatorsModal from "./CreatorsModal";
const AllUsersPage = (props) => {
       const [showModal, setShowModal] = useState(false);
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
                console.log();
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }, []);

    return (
        <>
            <div className="allUsersBackground">
                <nav className="bg-white px-2 sm:px-4 py-2.5  rounded-lg fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-xl">
                    <div
                        className=" flex items-center justify-center m-auto "
                        style={{}}
                    >
                        <img
                            src={favicon}
                            className="h-12 w-12 m-1"
                            alt="favicon"
                        />
                        <img
                            src={bomb}
                            className="h-12 w-12 m-1 hover:animate-bounce"
                            alt="favicon"
                        />
                        <Boop rotation={"5"} timing={"200"}>
                            <span className="self-center tracking-tighter font-extrabold text-5xl font-semibold whitespace-nowrap">
                                PhotoBomb!
                            </span>
                        </Boop>

                        <div
                            className="grid grid-cols-5 content-evenly items-center justify-between hidden w-full md:flex md:w-auto"
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8">
                                <li>
                                    <div
                                        style={{ width: "250px" }}
                                        className=" cursor-grab block py-2 text-3xl pl-3 w-64pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className=" whitespace-nowrap grid grid-cols-2 font-extrabold tracking-tighter whitespace-nowrap border w-auto p-1 bg-green-500 rounded-lg shadow-lg text-white">
                                            @{user.username}
                                            <div class=" ml-16 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                                                <svg
                                                    class="absolute w-12 h-12 text-gray-400 -left-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Boop rotation={"15"} timing={"200"}>
                                        <Link
                                            to={"/browsephotos"}
                                            className=" hover:underline font-extrabold cursor-pointer block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Inspiration?
                                        </Link>
                                    </Boop>
                                </li>
                            </ul>
                    <div className="mr-4 flex flex-col items-center justify-center">
                        <button
                            className="hover:animate-ping px-4 py-2 font-extrabold text-purple-100 bg-purple-600 rounded-md"
                            type="button"
                            onClick={() => {
                                setShowModal(true);
                            }}
                        >
                            Creators
                        </button>
                        {showModal && (
                            <CreatorsModal setOpenModal={setShowModal} />
                        )}
                    </div>
                            <Link
                                to={`/users/update/${user.id}`}
                                className="hover:animate-bounce m-2 hover:text-white font-extrabold whitespace-nowrap border p-2 bg-orange-400 hover:bg-orange-700 rounded-lg shadow-lg text-white"
                            >
                                Update User
                            </Link>
                            {/* <Link
                                className="m-2 border border-black rounded-lg text-center bg-blue-200 p-2"
                                to={"/TestConfirmPage"}
                            >
                                Go Back To Test Page
                            </Link> */}
                            <LogoutButton className="text-white hover:text-white" />
                        </div>
                    </div>
                </nav>
                <div>
                    <div className="min-h-screen flex flex-col justify-center ">
                        <div
                            className="relative py- mt-44 sm:max-w-auto sm:mx-auto"
                            style={{ width: "700px" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-14">
                                <div
                                    className="max-w-xl mx-auto -mt-10 "
                                    style={{ height: "500px" }}
                                >
                                    <UserListSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllUsersPage;
