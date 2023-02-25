import React, { useState, useEffect, useContext } from "react";
import UserContext from '../../context/UserContext';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Boop from "../../styles/Boop";
import { animated } from "react-spring";
import LogoutButton from "../Buttons/LogoutButton";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
const AllUsersPage = (props) => {
    const [usersList, setUsersList] = useState([]);
    const [user, setUser] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    // const {UserContext} = useContext(UserContext);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/")
            .then((res) => {
                setUsersList(res.data);
                
                console.log("All users:", res.data);
   
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    },[]);
    
    const userFirstName= user["firstName"]

    //     useEffect(() => {
    //     axios
    //         .get("http://localhost:8000/api/users/")
    //         .then((res) => {
    //             // console.log("res", res.data);
    //             // setUsersList(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setErrors(err.response.data.errors);
    //         });
    // });


    return (
        <>
            <div>
                <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div class="container flex flex-wrap items-center justify-center mx-auto">
                        <img
                            src={favicon}
                            className="h-12 w-12 m-1"
                            alt="favicon"
                        />
                        <img
                            src={bomb}
                            className="h-12 w-12 m-1"
                            alt="favicon"
                        />
                        <Boop rotation={"5"} timing={"200"}>
                            <span className="self-center tracking-tighter font-extrabold text-5xl font-semibold whitespace-nowrap dark:text-white">
                                PhotoBomb!
                            </span>
                        </Boop>
                        <div className="flex md:order-2">
                            <Boop rotation={"5"} timing={"200"}>
                                <LogoutButton />
                            </Boop>
                        </div>
                              <div className="flex md:order-2">
                            <Boop rotation={"5"} timing={"200"}>
                                 <span className="self-center tracking-tighter font-extrabold text-sm font-semibold whitespace-nowrap dark:text-white">
                                {["firstName"]} is logged in
                                {user["firstName"]}
                            </span>
                            </Boop>
                        </div>
                        <div
                            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-sticky"
                        >
                            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a
                                        href="_#"
                                        className="text-3xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="_#"
                                        class="block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="_#"
                                        class="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="_#"
                                        class="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    {/* Login */}
                    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                <div className="max-w-md mx-auto">
                                    <div>
                                        <h1 className="text-4xl font-extrabold">
                                            All Users
                                        </h1>
                                        <div>
                                            {usersList.length > 0 &&
                                                usersList.map((user, index) => (
                                                    <>
                                                    <div className="grid grid-flow-col m-4 text-center inline-flex whitespace-nowrap">
                                                        <img
                                                            src={bomb}
                                                            alt="bomb"
                                                            className="h-5 w-5"
                                                        />
                                                        <div key={user.id}>
                                                            <p>{user.email}</p>
                                                        </div>
                                                    </div>
                                                    </>
                                                ))}
                                            <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400"></ul>
                                        </div>
                                    </div>
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
