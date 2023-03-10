import React, { useEffect, useState, useContext } from "react";
import Boop from "../../styles/Boop";
import { UserContext } from "../../context/UserContext";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
const EditUserButton = (props) => {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    const [usersList, setUsersList] = useState([]);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/")
            .then((res) => {
                console.log("RES!", res.data);
                console.log(user);
                setUsersList(res.data);
                console.log();
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }, []);
    console.log("list", usersList);
    return (
        <>
            <div>
                <div className="flex md:order-2">
                    <Boop rotation={"5"} timing={"200"}>
                        <div className="flex bg-orange-400 hover:bg-orange-600 hover:cursor-pointer text-white text-lg m-4 p-2 rounded-lg shadow-lg self-center tracking-tighter font-extrabold font-semibold whitespace-nowrap dark:text-white">
                            <Link to={"/users/update/" + user._id}>
                                Edit Your Profile
                            </Link>
                        </div>
                    </Boop>
                </div>
            </div>
        </>
    );
};

export default EditUserButton;
