import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Boop from "../../styles/Boop";
import { animated } from "react-spring";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
import { faker } from "@faker-js/faker";
import CreatorsModal from "./CreatorsModal";
import loginBackgroundImage from "../../styles/images/loginBackground.jpg";
const RegisterPage = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [createdAt] = useState(Date());
    // const [updatedAt] = useState(Date());

    //Same as above...
    const [state, setState] = useState({
        register: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
        },
    });
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const { register } = state;

    const handleRegInputs = (e) => {
        props.setAuthorized("");
        setState({
            ...state,
            register: { ...state.register, [e.target.name]: e.target.value },
        });
    };

    //FAKER USER GENERATOR:
    // useEffect(() => {
    //     const f = faker.name.firstName();
    //     const l = faker.name.lastName();
    //     const p = "password";
    //     const e = `${f}.${l}@email.com`
    //     const eLowercase = e.toLowerCase();
    //     const randomUserName = `${f}.${l}`;
    //     const u = randomUserName.toLowerCase();
    //     setFirstName(f);
    //     setLastName(l);
    //     setEmail(eLowercase);
    //     setUsername(u);
    //     setPassword(p);
    //     setConfirmPassword(p);
    // }, []);

    const handleRegistration = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/users/register", register, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                setUser({
                    id: res.data.user.id,
                    username: res.data.user.username,
                    firstName: res.data.user.firstName,
                    lastName: res.data.user.lastName,
                    email: res.data.user.email,
                });
                alert(
                    "Thanks for registering.  Please sign in to get started."
                );
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };
    return (
        <>
            <div className="registerUserBackgroundImage h-auto">
                <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-screen z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className=" whitespace-nowrap flex items-center justify-center mx-auto">
                        <img
                            src={favicon}
                            className="h-12 w-12 m-1"
                            alt="favicon"
                        />
                        <img
                            src={bomb}
                            className="h-12 w-12 m-1 hover:animate-bounce"
                            alt="bomb"
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
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                                {/* <li>
                                    <a
                                        href="_#"
                                        class=" cursor-grab block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to={"/browsephotos"}
                                        class=" cursor-grab block py-2 text-3xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Browse Photos
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="_#"
                                        className="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Services
                                    </a>
                                </li> */}
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
                                    <CreatorsModal
                                        setOpenModal={setShowModal}
                                    />
                                )}
                            </div>
                            <div className="flex md:order-2 w-auto whitespace-nowrap">
                                <Boop rotation={"5"} timing={"200"}>
                                    <Link
                                        type="button"
                                        to={"/Login"}
                                        className="text-white hover:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Already got an account? Login Here
                                    </Link>
                                </Boop>
                                <div>
                                    {/* <Link
                                        className="m-2 border w-24 border-black rounded-lg text-center bg-blue-200 p-2"
                                        to={"/TestConfirmPage"}
                                    >
                                        Go Back To Test Page
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className="h-auto py-6 flex flex-col justify-center sm:py-12">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-32">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                            <div className="relative px-4 py- bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                <div
                                    className="max-w-md mx-auto"
                                    style={{
                                        height: "550px",
                                        width: "550px",
                                        padding: "",
                                    }}
                                >
                                    <div>
                                        <h1 className="text-3xl font-extrabold -mt-11">
                                            Register
                                        </h1>
                                    </div>
                                    <form onSubmit={handleRegistration}>
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

                                            {errors.password && (
                                                <p className="accent">
                                                    {errors.password.message}
                                                </p>
                                            )}
                                            {errors.confirmPassword && (
                                                <p className="accent">
                                                    {
                                                        errors.confirmPassword
                                                            .message
                                                    }
                                                </p>
                                            )}
                                        </div>
                                        <div className="divide-y divide-gray-200">
                                            <div className="py-8 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
                                                <div
                                                    className="relative"
                                                    style={{}}
                                                >
                                                    <input
                                                        id="firstName"
                                                        name="firstName"
                                                        type="text"
                                                        // value={firstName}
                                                        onChange={
                                                            handleRegInputs
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        // placeholder={randomFirstName}
                                                    />
                                                    <label
                                                        htmlFor="firstName"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        First Name
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="lastName"
                                                        name="lastName"
                                                        type="text"
                                                        onChange={
                                                            handleRegInputs
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    />
                                                    <label
                                                        htmlFor="lastName"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Last Name
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        onChange={
                                                            handleRegInputs
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        // placeholder={lowercaseUserName}
                                                        // value={username}
                                                    />
                                                    <label
                                                        htmlFor="username"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Username
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        autoComplete="off"
                                                        id="email"
                                                        name="email"
                                                        type="text"
                                                        onChange={
                                                            handleRegInputs
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        // placeholder={lowercaseRandomEmail}
                                                        // value={email}
                                                    />
                                                    <label
                                                        htmlFor="email"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Email Address
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        autoComplete="off"
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        onChange={
                                                            handleRegInputs
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        placeholder="Create Password"
                                                        // value={password}
                                                    />
                                                    <label
                                                        htmlFor="password"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        autoComplete="off"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        type="password"
                                                        onChange={
                                                            handleRegInputs
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                        placeholder="Confirm Password"
                                                        // value={confirmPassword}
                                                    />
                                                    <label
                                                        htmlFor="confirmPassword"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Confirm Password
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <Boop
                                                        rotation={"5"}
                                                        timing={"200"}
                                                    >
                                                        <button className="m-1 border shadow-lg p-4 bg-green-500 hover:bg-green-900 text-sm font-extrabold text-white rounded-xl">
                                                            Register
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
            </div>
        </>
    );
};

export default RegisterPage;
