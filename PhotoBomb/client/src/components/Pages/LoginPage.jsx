import React, { useState, useContext} from "react";
// import UserContext from '../../context/UserContext';  
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Boop from "../../styles/Boop";
import { animated } from "react-spring";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    // const {UserContext} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/users/login",
                { email, password },
                { withCredentials: true }
            )
            .then((res) => {
                console.log("user", res.data.user);

                alert("Yay, you have successfully logged in!");
                navigate("/TestConfirmPage");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };
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
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-5xl px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Register Here
                                </button>
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
                                            Login
                                        </h1>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <p className="animate-bounce text-red-600">
                                            {errors && (
                                                <span className="accent">
                                                    {errors} 📸
                                                </span>
                                            )}
                                        </p>
                                        <div className="divide-y divide-gray-200">
                                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                <div className="relative">
                                                    <input
                                                        autocomplete="off"
                                                        id="email"
                                                        name="email"
                                                        type="text"
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        placeholder="Email address"
                                                    />
                                                    <label
                                                        for="email"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Email Address
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        autocomplete="off"
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        placeholder="Password"
                                                    />
                                                    <label
                                                        for="password"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <Boop
                                                        rotation={"5"}
                                                        timing={"200"}
                                                    >
                                                        <button
                                                            onClick={
                                                                handleSubmit
                                                            }
                                                            type="submit"
                                                            className=" cursor-pointer bg-blue-500 text-white rounded-md px-2 py-1"
                                                        >
                                                            Submit
                                                        </button>
                                                    </Boop>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-auto text-center mt-96">
                    <Boop rotation={"5"} timing={"200"}>
                        <h1 className="tracking-tighter text-5xl m-4 text-blue-900">
                            LOGIN
                        </h1>
                    </Boop>
                    <Boop rotation={"2"} timing={"200"}>
                        <mark className="text-5xl tracking-widest font-extrabold bg-blue-900 text-white rounded-lg p-2">
                            PAGE
                        </mark>
                    </Boop>
                </div>
                <div></div>
            </div>
        </>
    );
};

export default LoginPage;
