import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import Boop from "../../styles/Boop";
import { animated } from "react-spring";
import LogoutButton from "../Buttons/LogoutButton";
import LoggedInAsButton from "../Buttons/LoggedInAsButton";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
import EditUserButton from "../Buttons/EditUserButton";
import SearchBar from "../Buttons/SearchBar";
const ViewUserPage = ({ user }) => {
    const { id } = useParams();
    console.log("id", id);
    const [usersList, setUsersList] = useState([]);
    const [viewUser, setViewUser] = useState({});
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/" + id)
            .then((response) => {
                console.log("response", response);
                setViewUser(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div>
                <div>
                    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                        <div class="container flex items-center justify-center mx-auto">
                            <img
                                src={favicon}
                                className="h-12 w-12 m-1"
                                alt="favicon"
                            />
                            <img
                                src={bomb}
                                className="h-12 w-12 m-1 hover:animate-spin"
                                alt="bomb"
                            />
                            <Boop rotation={"5"} timing={"200"}>
                                <span className="self-center tracking-tighter font-extrabold text-5xl font-semibold whitespace-nowrap dark:text-white">
                                    PhotoBomb!
                                </span>
                            </Boop>

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
                                            {/* About */}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="_#"
                                            class="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            {/* Services */}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="_#"
                                            class="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Creators
                                        </a>
                                    </li>
                                </ul>
                                <div>
                                    <span className="flex">
                                        <LoggedInAsButton user={user} />
                                        <EditUserButton user={user} />
                                        <Boop rotation={"5"} timing={"200"}>
                                            <div className="flex bg-blue-500 hover:bg-blue-600 text-white text-lg m-4 p-2 rounded-lg shadow-lg self-center tracking-tighter font-extrabold font-semibold whitespace-nowrap dark:text-white">
                                                <div className="cursor-pointer mr-2 text-white text-lg shadow-lg">
                                                    <Link to={"/users"}>
                                                        Go Back
                                                    </Link>
                                                </div>
                                            </div>
                                        </Boop>
                                    </span>
                                </div>
                                <Link
                                    className="m-2 border w-24 border-black rounded-lg text-center bg-blue-200 p-2"
                                    to={"/TestConfirmPage"}
                                >
                                    Go Back To Test Page
                                </Link>

                                <LogoutButton />
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto text-left">
                                <div>
                                    <h1 className="text-4xl mb-4 font-extrabold">
                                        User Details
                                    </h1>
                                    <div className="grid grid-flow-row">
                                        <Boop rotation={"6"} timing={"200"}>
                                            <div className="">
                                                <span className="mr-4 text-2xl mt-2 font-bold">
                                                    First Name:
                                                </span>
                                                <span className="text-xl">
                                                    {viewUser.firstName}
                                                </span>
                                            </div>
                                        </Boop>
                                        <Boop rotation={"6"} timing={"200"}>
                                            <div className="">
                                                <span className="mr-4 text-2xl mt-2 font-bold">
                                                    Last Name:
                                                </span>
                                                <span className="text-xl">
                                                    {viewUser.lastName}
                                                </span>
                                            </div>
                                        </Boop>
                                        <Boop rotation={"6"} timing={"200"}>
                                            <div className="">
                                                <span className="mr-4 text-2xl mt-2 font-bold">
                                                    Username:
                                                </span>
                                                <span className="text-xl">
                                                    {viewUser.username}
                                                </span>
                                            </div>
                                        </Boop>
                                        <Boop rotation={"6"} timing={"200"}>
                                            <div className="">
                                                <span className="mr-4 text-2xl mt-2 font-bold">
                                                    Email:
                                                </span>
                                                <span className="text-xl">
                                                    {viewUser.email}
                                                </span>
                                            </div>
                                        </Boop>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewUserPage;
