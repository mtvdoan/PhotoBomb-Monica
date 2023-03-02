//WORK IN PROGRESS
//I'll probably use this to search photos.

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Boop from "../../styles/Boop";
import LogoutButton from "../Buttons/LogoutButton";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
import CreatorsModal from "./CreatorsModal";

const PhotoSearch = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (user.id === 0) {
            props.setAuthorized("You have to be logged in to view this page");
            alert("You have to be logged in to view this page");
            navigate("/login");
        }
    }, []);
    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        if (name === "width") {
            setWidth(value);
        } else if (name === "height") {
            setHeight(value);
        } else if (name === "searchTerm") {
            setSearchTerm(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://source.unsplash.com/random/${width}x${height}/?${searchTerm}`;
        setImageUrl(url);
        setIsSearchClicked(true);
    };

    const handleReset = () => {
        setSearchTerm("");
        setWidth("");
        setHeight("");
        setImageUrl("");
        setIsSearchClicked(false);
    };
    return (
        <>
            <div className="inspirationalBackgroundImage" style={{height:"auto"}}>
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
                            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-sticky"
                        >
                            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                            <div className="flex">
                                <div className="flex">
                                    <div>
                                        <span className="flex">
                                            <Boop rotation={"5"} timing={"200"}>
                                                <div className="flex bg-blue-500 hover:bg-blue-600 text-white text-lg m-4 p-2 rounded-lg shadow-lg self-center tracking-tighter font-extrabold font-semibold whitespace-nowrap dark:text-white">
                                                    <div className="cursor-pointer mr-2 text-white text-lg shadow-lg">
                                                        <Link
                                                            to={"/users"}
                                                            className="font-extrabold text-white hover:text-white"
                                                        >
                                                            Go Back
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Boop>
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    to={`/users/update/${user._id}`}
                                    className="m-2 font-extrabold whitespace-nowrap border p-2 m-auto hover:text-white bg-orange-400 hover:bg-orange-700 rounded-lg shadow-lg text-white"
                                >
                                    Update User
                                </Link>
                                {/* <Link
                                className="m-2 border border-black rounded-lg text-center bg-blue-200 p-2"
                                to={"/TestConfirmPage"}
                            >
                                Go Back To Test Page
                            </Link> */}
                            </div>

                            <LogoutButton />
                        </div>
                    </div>
                </nav>
                <div>
                    <div
                        className="min-h-screenpy-auto flex grid grid-cols-2 content-center lg:py-56 mt-30 "
                        style={{}}
                    >
                        <div className="relative py-3 sm:max-w-auto sm:mx-auto">
                            <div
                                style={{ height: "650px" }}
                                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
                            ></div>
                            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                <div className="max-w-xl mx-auto">
                                    <p className="text-2xl tracking-tigther font-extrabold mb-2">
                                        Check out these
                                        <Boop rotation={"3"} timing={"200"}>
                                            <mark className="m-2 p-2 rounded-xl bg-purple-800 text-white shadow-lg">
                                                amazing photos!
                                            </mark>
                                        </Boop>
                                    </p>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="flex items-center"
                                        // style={{ width: "300px" }}
                                    >
                                        <div className="relative w-full">
                                            <div>
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="width"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Width
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="width"
                                                        name="width"
                                                        max={"500"}
                                                        onChange={handleChange}
                                                        placeholder="Enter a width"
                                                        required
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    />
                                                </div>
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="height"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Height
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="height"
                                                        name="height"
                                                        max={"500"}
                                                        onChange={handleChange}
                                                        placeholder="Enter a height"
                                                        required
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    />
                                                </div>
                                                <div className="mb-6">
                                                    <label
                                                        htmlFor="searchTerm"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Subject
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="searchTerm"
                                                        name="searchTerm"
                                                        onChange={handleChange}
                                                        placeholder="Enter a subject"
                                                        required
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                {isSearchClicked ? (
                                                    <button
                                                        type="button"
                                                        id="resetButton"
                                                        onClick={handleReset}
                                                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                                    >
                                                        Reset Search
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        id="searchButton"
                                                        onClick={handleSubmit}
                                                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                                    >
                                                        Search
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Search Image Result */}
                        <div>
                            <mark className="mb-4 bg-slate-500 text-white m-4 p-4 rounded-xl shadow-lgs text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                                Search Result:
                            </mark>
                            <hr className="" style={{width:"800px"}}/>
                            <div>
                                {imageUrl && (
                                    <div>
                                        <img
                                            src={imageUrl}
                                            alt="randomImage"
                                            className="max-w-full h-auto m-4 rounded-lg shadow-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Search Image Result*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoSearch;
