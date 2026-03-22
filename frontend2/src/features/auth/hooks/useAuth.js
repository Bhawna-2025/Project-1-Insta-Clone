//hook layer

import { useContext } from "react";
import { AuthContext } from "../auth.context";//State Layer se State le aye aur 
import { login, register } from "../service/auth.api" //api layer se saari api ko le ayga

 const useAuth =()=>{
    const Context = useContext(AuthContext)

    const {user,setuser,Loading,setLoading}=Context

    const handleLogin = async (username, password)=>{
        setLoading(true)
        const response = await login(username,password)
        setuser(response.user)
        setLoading(false)
    }
    
    const handleRegister = async (username, password,email)=>{
        setLoading(true)
        const response = await register(username,password,email)
        setuser(response.user)
        setLoading(false)
    }
    return{
            user,Loading,handleLogin,handleRegister
        }
    

}

export default useAuth

