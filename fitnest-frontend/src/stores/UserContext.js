import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState([]);

    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData,
            }}
        >
            {children}
        </UserContext.Provider>
    );
    
};

export default UserProvider;