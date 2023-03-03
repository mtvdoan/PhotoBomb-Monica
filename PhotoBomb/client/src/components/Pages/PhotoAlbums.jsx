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
const PhotoAlbums = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(UserContext);
    const [usersList, setUsersList] = useState([]);
    const [photoDetails, setPhotoDetails] = useState("");
    const [errors, setErrors] = useState("");
    const [photoDetailsList, setPhotoDetailsList] = useState([]);
    const [photoDetailsCreator, setPhotoDetailsCreator] = useState("");
    const [photoDetailsLabel, setPhotoDetailsLabel] = useState("");
    const [photoDetailsDescription, setPhotoDetailsDescription] = useState("");
    const [photoDetailsDateTaken, setPhotoDetailsDateTaken] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/photoDetails/")
            .then((response) =>
                setPhotoDetailsList(
                    response.data,
                    console.log("All photo details", response.data)
                )
            )
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }, []);

    return (
        <>
            <span className="">
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
                            <span className="self-center tracking-tighter font-extrabold text-5xl whitespace-nowrap">
                                PhotoBomb!
                            </span>
                        </Boop>

                        <div
                            className="grid grid-cols-5 content-evenly items-center justify-between w-full md:flex md:w-auto"
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8">
                                <li>
                                    <div
                                        style={{ width: "250px" }}
                                        className=" cursor-grab block py-2 text-3xl pl-3 w-64pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className=" grid grid-cols-2 font-extrabold tracking-tighter whitespace-nowrap border w-auto p-1 bg-green-500 rounded-lg shadow-lg text-white">
                                            @{user.username}
                                            <div class=" ml-16 relative w-10 h-10 bg-gray-100 rounded-full">
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
                                    <CreatorsModal
                                        setOpenModal={setShowModal}
                                    />
                                )}
                            </div>
                            <Link
                                to={`/users/update/${user.id}`}
                                className="hover:animate-bounce m-2 hover:text-white font-extrabold whitespace-nowrap border p-2 bg-orange-400 hover:bg-orange-700 rounded-lg shadow-lg text-white"
                            >
                                Update User
                            </Link>
                            <Boop rotation={"5"} timing={"200"}>
                                <div className="flex bg-blue-500 hover:bg-blue-600 text-white text-lg m-4 p-2 rounded-lg shadow-lg self-center tracking-tighter font-extrabold font-semibold whitespace-nowrap dark:text-white">
                                    <div className="cursor-pointer mr-2 hover:text-white font-extrabold text-white text-lg shadow-lg">
                                        <Link
                                            className="text-xl text-white"
                                            to={"/users"}
                                        >
                                            Go Back
                                        </Link>
                                    </div>
                                </div>
                            </Boop>
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
            </span>

            <div className="mt-48">
                <div className="grid grid-cols-2 content-center ">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Your{" "}
                        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                            Albums
                        </span>
                    </h1>
                    <Link
                        to={`/createPhotoDetails`}
                        class="relative w-96 px-6 py-3 font-bold text-black group"
                    >
                        <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-3 -translate-y-3 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span class="relative text-3xl whitespace-nowrap">Create Photo Details</span>
                    </Link>

                    <section className="mb-6 overflow-hidden text-neutral-700">
                        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                            <div className="-m-1 flex flex-wrap md:-m-2">
                                {photoDetailsList.length > 0 &&
                                    photoDetailsList.map(
                                        (photoDetails, index) => (
                                            <>
                                                <div className="flex w-1/3 flex-wrap">
                                                    <Boop
                                                        rotation={"5"}
                                                        timing={"300"}
                                                    >
                                                        <Link
                                                            to={`/photoDetails/${photoDetails._id}`}
                                                        >
                                                            <div className="w-full p-1 md:p-2 mb-6">
                                                                <span className="grid grid-cols-2 content-center whitespace-nowrap">
                                                                    <label
                                                                        htmlFor="gallery1"
                                                                        className="hover:underline text-extrabold text-2xl tracking-tighter"
                                                                    >
                                                                        Lake
                                                                        Trips
                                                                    </label>
                                                                    <Boop
                                                                        rotation={
                                                                            "5"
                                                                        }
                                                                        timing={
                                                                            "100"
                                                                        }
                                                                    >
                                                                        <Link
                                                                            to={`/photoDetails/update/${photoDetails._id}`}
                                                                            className="hover:animate-bounce m-2 text-xs hover:text-white font-extrabold whitespace-nowrap border p-2 bg-pink-400 hover:bg-pink-700 rounded-lg shadow-lg text-white"
                                                                        >
                                                                            Update
                                                                        </Link>
                                                                    </Boop>
                                                                </span>
                                                                <img
                                                                    alt="gallery"
                                                                    name="gallery1"
                                                                    className="block p-1 h-full w-full rounded-lg object-cover object-center"
                                                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                                                />
                                                            </div>
                                                        </Link>
                                                    </Boop>
                                                </div>
                                            </>
                                        )
                                    )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default PhotoAlbums;
