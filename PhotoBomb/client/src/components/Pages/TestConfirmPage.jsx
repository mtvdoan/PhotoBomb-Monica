import { Link } from "react-router-dom";
import LogoutButton from "../Buttons/LogoutButton";
import SearchBar from "../Buttons/SearchBar";
import React, { useState, useEffect } from "react";
import UserListSearch from "../api/UserListSearch";
import PokemonSearch from "../api/PokemonSearch";
const TestConfirmPage = ({ user }) => {
    return (
        <>
            <div>
                <div className="flex text-3xl text-left font-extrabold grid grid-rows-12 content-center flex justify-center">
                    <h2>
                        Just a place to test user related stuff and search
                        bar...
                    </h2>
                    <h4 className="">
                        If you have reached here, you have successfully logged
                        in and navigated here.
                    </h4>
                    <h4 className="text-red-800">
                        Current user logged in: {user.firstName}
                    </h4>
                    <LogoutButton />
                    <button className=" hover:bg-blue-900 text-white cursor-pointer h-12 w-56 rounded-xl bg-blue-400">
                        <Link to={"/users"}>All Users Page</Link>
                    </button>
                </div>
            </div>
            <div className="flex grid grid-cols-2 content-center">
                <UserListSearch />
                <div>
                <h1 className="whitespace-normal text-center w-96 font-bold text-blue-900">Created a search bar filter for an existing api like Pokemon just to test out how to retrieve images.  Will use for reference.
                </h1>
                <PokemonSearch />
                </div>
            </div>
        </>
    );
};

export default TestConfirmPage;
