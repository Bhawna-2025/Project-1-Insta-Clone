//state url 

import {createContext, useState} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const  AuthProvider=({children})=>{
    const [user, setuser] = useState(null)
    const [Loading, setLoading] = useState(false)

    return(
        <AuthContext.Provider value={{user,setuser,Loading,setLoading}}>
                {children}
        </AuthContext.Provider>
    )
}