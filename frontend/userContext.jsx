// import React, { createContext, useState, useContext } from 'react';

// const UserDataContext = createContext();

// export const UserDataProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null);

//     return (
//         <UserDataContext.Provider value={{ userData, setUserData }}>
//             {children}
//         </UserDataContext.Provider>
//     );
// };

// export const useUserData = () => useContext(UserDataContext);

import React, { createContext, useState, useEffect, useContext } from 'react';

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    // Update local storage whenever user data changes
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => useContext(UserDataContext);
