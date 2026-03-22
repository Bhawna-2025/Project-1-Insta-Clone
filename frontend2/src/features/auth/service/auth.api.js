//api layer

import axios from 'axios'

const api=axios.create({
    baseURL:"http://localhost:4000/api/auth",
    withCredentials:true,
})

export async function login(username,password){
    const response = await api.post("/login",{
        username ,password
    })

    return response.data
}
export async function register(username,password,email){
    const response = await api.post("/register",{
        username ,password,email
    })

    return response.data
}
export async function getMe(){
    const response =api.get("/get-me")
    return response.data
}