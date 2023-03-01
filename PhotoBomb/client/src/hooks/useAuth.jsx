import {AuthProvider} from '../context/UserContext'
import React, {useContext} from 'react';
import {AuthContext} from '../context/UserContext'
const useAuth = (props) => {
    return useContext(AuthContext);
}
export default useAuth;