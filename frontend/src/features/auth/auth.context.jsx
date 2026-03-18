import {createContext,useState} from "react";
import { register,login} from "./services/auth.api";

export const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [Loading, setLoading] = useState(false)

    const handleLogin = async (username , email) => {
        setLoading(true)
        try{
            const response =await login(username,email)
            setUser(response.data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    const handleRegister =async (username, email, password)=>{
        setLoading(true)
        try{
            const response = await register(username, email, password)
            setUser(response.data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{user,Loading,handleLogin,handleRegister}}>
            {children}
        </AuthContext.Provider>
    )


}