import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Boop from "../../styles/Boop";
const UserListSearch = ({ user }) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [query, setQuery] = useState("");

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
        <div>
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
            <ul>
                <span className="whitespace-nowrap overflow-auto">
                    {filteredUsers.length > 0
                        ? filteredUsers.map((user) => (
                              <div className="hover:cursor-pointer hover:text-blue-900">
                                  <Boop
                                      className="flex flex-col"
                                      rotation={"5"}
                                      timing={"200"}
                                  >
                                      <Link
                                          className=""
                                          to={`/user/${user._id}`}
                                      >
                                          <li
                                              className=" flex text-blue-600 cursor-pointer"
                                              key={user.id}
                                          >
                                              <div className="text-2xl font-extrabold tracking-tightest">
                                                  {user.firstName}{" "}
                                                  {user.lastName}
                                              </div>
                                              <div className="text-xl">
                                                  {" "}
                                                  - {user.email}
                                              </div>
                                          </li>
                                      </Link>
                                  </Boop>
                              </div>
                          ))
                        : users.map((user) => (
                              <div className="cursor-pointer hover:text-blue-900">
                                  <Boop
                                      className=""
                                      rotation={"5"}
                                      timing={"200"}
                                  >
                                      <Link
                                          className="cursor-pointer hover:text-blue-900"
                                          to={`/user/${user._id}`}
                                      >
                                          <li
                                              className=" m-2 flex text-blue-500"
                                              key={user.id}
                                          >
                                              <div className="hover:text-blue-900 cursor-pointer text-2xl font-extrabold tracking-tightest">
                                                  {user.firstName}{" "}
                                                  {user.lastName}
                                              </div>
                                              <div className="hover:text-blue-900 cursor-pointer text-xl">
                                                  {" "}
                                                  - {user.email}
                                              </div>
                                          </li>
                                      </Link>
                                  </Boop>
                              </div>
                          ))}
                </span>
            </ul>
        </div>
    );
};

export default UserListSearch;
