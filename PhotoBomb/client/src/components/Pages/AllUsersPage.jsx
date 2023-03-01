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

const AllUsersPage = (props) => {
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
            <div>
                <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div
                        class=" flex items-center justify-center m-auto "
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
                            <span className="self-center tracking-tighter font-extrabold text-5xl font-semibold whitespace-nowrap dark:text-white">
                                PhotoBomb!
                            </span>
                        </Boop>

                        <div
                            className="grid grid-cols-5 content-evenly items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a
                                        href="_#"
                                        className=" cursor-grab block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="m-2 whitespace-nowrap border p-2 m-auto bg-green-500 rounded-lg shadow-lg text-white">
                                            @{user.username}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <Boop rotation={"15"} timing={"200"}>
                                        <Link
                                            to={"/browsephotos"}
                                            class=" hover:underline cursor-pointer block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Inspiration?
                                        </Link>
                                    </Boop>
                                </li>
                                <li>
                                    <a
                                        href="_#"
                                        className="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Creators
                                    </a>
                                </li>
                            </ul>

                            <Link
                                to={`/users/update/${user.id}`}
                                className="hover:animate-bounce m-2 whitespace-nowrap border p-2 m-auto bg-orange-400 hover:bg-orange-700 rounded-lg shadow-lg text-white"
                            >
                                Update User
                            </Link>
                            {/* <Link
                                className="m-2 border border-black rounded-lg text-center bg-blue-200 p-2"
                                to={"/TestConfirmPage"}
                            >
                                Go Back To Test Page
                            </Link> */}
                            <LogoutButton />
                        </div>
                    </div>
                </nav>
                <div>
                    <div className="min-h-screen bg-gray-100 py-auto flex flex-col justify-center lg:py-56 mt-30 ">
                        <div
                            className="relative py-3 sm:max-w-auto sm:mx-auto"
                            style={{ width: "800px" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-14">
                                <div className="max-w-xl mx-auto -mt-10 " style={{height:"500px"}}>
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
