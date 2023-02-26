import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 content-center text-center mt-96 text-5xl">
                    <h1>Home Page Title</h1>
                    <p>Just testing things out here...</p>
                    <div className="text-blue-600 cursor-pointer underline">
                        <Link className=" cursor-pointer" to={"/login"}>
                            Login Page
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
