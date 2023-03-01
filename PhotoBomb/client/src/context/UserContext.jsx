

import {useState, createContext} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        username: ""

    })

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export  {UserProvider, UserContext}