import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Buttons/LogoutButton";
const TestConfirmPage = ({ user }) => {
    return (
        <>
            <div>
                <div className="text-xl text-center font-extrabold mt-96">
                    <h2>Just a place to test user login/reg/logout...</h2>
                    <h4 className="">
                        If you have reached here, you have successfully logged
                        in and navigated here.
                    </h4>
                    <h4 className="text-purple-800">Current user logged in: {user.firstName}</h4>
                    <LogoutButton />
                    <button className=" hover:bg-blue-900 text-white cursor-pointer h-12 w-56 rounded-xl bg-blue-400">
                        <Link to={"/users"}>All Users Page</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default TestConfirmPage;
