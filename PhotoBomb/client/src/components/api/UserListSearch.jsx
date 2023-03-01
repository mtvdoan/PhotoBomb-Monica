import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

import Boop from "../../styles/Boop";

const UserListSearch = (props) => {
    const { user } = useContext(UserContext);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        filterUsers(event.target.value);
    };

    const filterUsers = (query) => {
        const filtered = users.filter(
            (user) =>
                user.firstName.toLowerCase().includes(query.toLowerCase()) ||
                user.lastName.toLowerCase().includes(query.toLowerCase()) ||
                user.email.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <div className="" style={{ width: "auto" }}>
            <h1 className="text-5xl tracking-tightest font-extrabold m-2 text-center">
                Users
            </h1>
            <input
                type="text"
                className="w-96 rounded-lg"
                value={query}
                onChange={handleQueryChange}
                placeholder="Search users by first name, last name, or email"
            />
            <ul className="overflow-y-scroll w-auto  h-96">
                {filteredUsers.length > 0
                    ? filteredUsers.map((user) => (
                          <div className="hover:cursor-pointer hover:text-blue-900" key={user.id}>
                              <Boop
                                  className="flex flex-col"
                                  rotation={"5"}
                                  timing={"200"}
                              >
                                  <Link to={`/users/${user._id}`}>
                                      <li className=" flex text-blue-600 cursor-pointer">
                                          <div className="text-2xl font-extrabold tracking-tightest">
                                              {user.username}
                                          </div>
                                      </li>
                                  </Link>
                              </Boop>
                          </div>
                      ))
                    : users.map((user) => (
                          <div className="cursor-pointer hover:text-blue-900" key={user.id}>
                              <Boop
                                  className=""
                                  rotation={"5"}
                                  timing={"200"}
                              >
                                  <Link
                                      className="cursor-pointer hover:text-blue-900"
                                      to={`/users/${user._id}`}
                                  >
                                      <li className=" m-2 flex text-blue-500" key={user.id}>
                                          <div className="hover:text-blue-900 cursor-pointer text-2xl font-extrabold tracking-tightest">
                                              {user.username}{" "}
                                          </div>
                                      </li>
                                  </Link>
                              </Boop>
                          </div>
                      ))}
            </ul>
        </div>
    );
};

export default UserListSearch;
