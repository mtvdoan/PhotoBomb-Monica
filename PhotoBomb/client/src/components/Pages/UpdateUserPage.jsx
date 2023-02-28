import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import Boop from "../../styles/Boop";
import { animated } from "react-spring";
import LogoutButton from "../Buttons/LogoutButton";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
import LoggedInAsButton from "../Buttons/LoggedInAsButton";
import DeleteUserButton from "../Buttons/DeleteUserButton";

const UpdateUserPage = ({ user }) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    // const [password, setPassword] = useState(user.password);
    // const [confirmPassword, setConfirmPassword] = useState(user.confirmPassword);
    const [createdAt] = useState(Date());
    const [updatedAt] = useState(Date());
    const [errors, setErrors] = useState("");
    // const [usersList, setUsersList] = useState("");
    const navigate = useNavigate();

    // const {UserContext} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("EDIT USER");
        axios
            .put(
                "http://localhost:8000/api/users/update/" + id,
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    // password,
                    // confirmPassword,
                    // createdAt,
                    // updatedAt,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log("updated user-res", res);

                alert("Thanks for updating!");
                navigate("/users");
            })
            .catch((err) => {
                console.log("res", err);
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    };
    return (
        <>
            <div>
                <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex flex-wrap items-center justify-center mx-auto">
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

                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a
                                        href="_#"
                                        className=" cursor-grab block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <Link className=" cursor-grab block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Browse Photos
                                    </Link>
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
                            <div className="flex">
                                <LoggedInAsButton user={user}/>
                                <div>
                                    <span className="flex">
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
                            </div>
                            <LogoutButton />
                        </div>
                    </div>
                </nav>
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto whitespace-nowrap">
                                <div>
                                    <h1 className="mb-5 text-2xl font-extrabold">
                                        Edit User: {user.email}
                                    </h1>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="animate-bounce text-red-600">
                                            {errors.firstName && (
                                                <p className="accent">
                                                    {errors.firstName.message}
                                                </p>
                                            )}

                                            {errors.lastName && (
                                                <p className="accent">
                                                    {errors.lastName.message}
                                                </p>
                                            )}

                                            {errors.email && (
                                                <p className="accent">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                            {errors.username && (
                                                <p className="accent">
                                                    {errors.username.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="divide-y divide-gray-200">
                                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                <div className="relative">
                                                    <input
                                                        id="firstName"
                                                        name="firstName"
                                                        type="text"
                                                        value={firstName}
                                                        onChange={(e) =>
                                                            setFirstName(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    />
                                                    <label
                                                        htmlFor="firstName"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm text-sm"
                                                    >
                                                        First Name
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="lastName"
                                                        name="lastName"
                                                        type="text"
                                                        onChange={(e) =>
                                                            setLastName(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        value={lastName
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="lastName"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm text-sm"
                                                    >
                                                        Last Name
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        onChange={(e) =>
                                                            setUsername(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        value={username}
                                                    />
                                                    <label
                                                        htmlFor="username"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm text-sm"
                                                    >
                                                        Username
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="text"
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        value={email}
                                                    />
                                                    <label
                                                        htmlFor="email"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm text-sm"
                                                    >
                                                        Email Address
                                                    </label>
                                                </div>
                                                {/* <div className="relative">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        value={password}
                                                    />
                                                    <label
                                                        htmlFor="password"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm text-sm"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        type="password"
                                                        onChange={(e) =>
                                                            setConfirmPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        value={confirmPassword}
                                                    />
                                                    <label
                                                        htmlFor="confirmPassword"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm text-sm"
                                                    >
                                                        Confirm Password
                                                    </label>
                                                </div> */}
                                                <div className="relative">
                                                    <Boop
                                                        rotation={"5"}
                                                        timing={"200"}
                                                    >
                                                        <button
                                                            type="submit"
                                                            className=" cursor-pointer bg-blue-500 text-white rounded-md px-2 py-1"
                                                        >
                                                            Update User
                                                        </button>
                                                    </Boop>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                                    <DeleteUserButton user={user}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateUserPage;
