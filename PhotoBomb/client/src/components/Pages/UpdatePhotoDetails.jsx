import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Boop from "../../styles/Boop";
import { animated } from "react-spring";
import LogoutButton from "../Buttons/LogoutButton";
import favicon from "../../styles/images/favicon.png";
import bomb from "../../styles/images/bomb.png";
import LoggedInAsButton from "../Buttons/LoggedInAsButton";
import UserListSearch from "../api/UserListSearch";
import CreatorsModal from "./CreatorsModal";
const CreatePhotoDetails = (props) => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(UserContext);
    console.log("who dis", user);
    const [usersList, setUsersList] = useState([]);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const [photoDetails, setPhotoDetails] = useState("");
    const [photoDetailsList, setPhotoDetailsList] = useState([]);
    const [photoDetailsCreator, setPhotoDetailsCreator] = useState("");
    const [photoDetailsLabel, setPhotoDetailsLabel] = useState("");
    const [photoDetailsDescription, setPhotoDetailsDescription] = useState("");
    const [photoDetailsDateTaken, setPhotoDetailsDateTaken] = useState("");

    // const newPhotoDetails = {
    //     photoDetailsCreator: user.username,
    //     photoDetailsLabel: photoDetailsLabel,
    //     photoDetailsDescription: photoDetailsDescription,
    //     photoDetailsDateTaken: photoDetailsDateTaken,
    // }

    // const findOnePhotoDetails = (id) => {
    //     axios
    //         .get("http://localhost:8000/api/photoDetails/" + id)
    //         .then((response) => {
    //             setPhotoDetails(response.data);
    //         })
    //         .catch((err) => console.log(err));
    // };
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8000/api/photoDetails/")
    //         .then((res) => {
    //             console.log("RES!", res.data);
    //             console.log(photoDetails);
    //             setPhotoDetailsList(res.data);
    //             console.log("Did I get all the photo details?", res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setErrors(err.response.data.errors);
    //         });
    // }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(
                "http://localhost:8000/api/photoDetails/update/" + id, {
                    photoDetailsCreator: user.username,
                    photoDetailsLabel,
                    photoDetailsDescription,
                    photoDetailsDateTaken,
                }
            )
            .then((res) => {
                
                console.log("Update successful on backend", res.data);
                navigate("/photoalbums");
                alert("Photo Detail has been updated!");

            })
            .catch((err) => {
                console.log(err);
                const errorRes = err.response.data.error.errors;
                setErrors(errorRes)

            });
    };

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8000/api/users/")
    //         .then((res) => {
    //             console.log("RES!", res.data);
    //             console.log(user);
    //             setUsersList(res.data);
    //             console.log(res.data.id);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setErrors(err.response.data.errors);
    //         });
    // }, []);

    return (
        <>
            <div className="createPhotoBackground" style={{ height: "auto"}}>
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
                            <Link
                                to={`/photoalbums/`}
                                className="hover:animate-bounce m-2 hover:text-white font-extrabold whitespace-nowrap border p-2 bg-blue-400 hover:bg-blue-700 rounded-lg shadow-lg text-white"
                            >
                                Photo Albums
                            </Link>
                            <Boop rotation={"5"} timing={"200"}>
                                <div className="flex bg-blue-500 hover:bg-blue-600 text-white text-lg m-4 p-2 rounded-lg shadow-lg self-center tracking-tighter font-extrabold font-semibold whitespace-nowrap dark:text-white">
                                    <div className="cursor-pointer mr-2 hover:text-white font-extrabold text-white text-lg shadow-lg">
                                        <Link
                                            className="text-xl text-white"
                                            to={"/users"}
                                        >
                                            Go Back Home
                                        </Link>
                                    </div>
                                </div>
                            </Boop>
                            <LogoutButton className="text-white hover:text-white" />
                        </div>
                    </div>
                </nav>

                <div className="mt-48">
                    <div className="" style={{}}>
                        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-white text-6xl">
                            Update{" "}
                            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                                Photo Details
                            </span>
                        </h1>
                    </div>

                    <div className="h-auto py-6 flex flex-col justify-center sm:py-12">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                            <div className="relative px-4 py- bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                <div
                                    className="max-w-md mx-auto"
                                    style={{
                                        height: "400px",
                                        width: "550px",
                                        padding: "",
                                    }}
                                >
                                    <div>
                                        <h1 className="text-3xl font-extrabold -mt-11">
                                            Update
                                        </h1>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="text-center animate-bounce text-red-600">
                                            {errors.photoDetailsCreator && (
                                                <p className="accent">
                                                    {
                                                        errors
                                                            .photoDetailsCreator
                                                            .message
                                                    }
                                                </p>
                                            )}
                                            {errors.photoDetailsLabel && (
                                                <p className="accent">
                                                    {
                                                        errors.photoDetailsLabel
                                                            .message
                                                    }
                                                </p>
                                            )}

                                            {errors.photoDetailsDescription && (
                                                <p className="accent">
                                                    {
                                                        errors
                                                            .photoDetailsDescription
                                                            .message
                                                    }
                                                </p>
                                            )}

                                            {errors.photoDetailsDateTaken && (
                                                <p className="accent">
                                                    {
                                                        errors
                                                            .photoDetailsDateTaken
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
                                                        id="photoDetailsCreator"
                                                        name="photoDetailsCreator"
                                                        type="text"
                                                        onChange={(e) =>
                                                            setPhotoDetailsCreator(
                                                                e.target.value
                                                            )
                                                        }
                                                        value={user.username}
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    />
                                                    <label
                                                        htmlFor="photoDetailsCreator"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Creator
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="photoDetailsLabel"
                                                        name="photoDetailsLabel"
                                                        type="text"
                                                        value={photoDetailsLabel}
                                                        onChange={(e) =>
                                                            setPhotoDetailsLabel(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    />
                                                    <label
                                                        htmlFor="photoDetailsLabel"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Photo Label
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="photoDetailsDescription"
                                                        name="photoDetailsDescription"
                                                        type="text"
                                                        value={photoDetailsDescription}
                                                        onChange={(e) =>
                                                            setPhotoDetailsDescription(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    />
                                                    <label
                                                        htmlFor="photoDetailsLabel"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Description
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        id="photoDetailsDateTaken"
                                                        name="photoDetailsDateTaken"
                                                        type="date"
                                                        value={photoDetailsDateTaken}
                                                        onChange={(e) =>
                                                            setPhotoDetailsDateTaken(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="m-2 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                    />
                                                    <label
                                                        htmlFor="photoDetailsDateTaken"
                                                        className="absolute left-4 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
                                                    >
                                                        Date Taken
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Boop
                                                    rotation={"5"}
                                                    timing={"200"}
                                                >
                                                    <button className="m-1 border shadow-lg p-4 bg-green-500 hover:bg-green-900 text-xl font-extrabold text-white rounded-xl">
                                                        Submit
                                                    </button>
                                                </Boop>
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

export default CreatePhotoDetails;
