import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:4000",
    withCredentials:true
})

export async function getFeed(){
    const response=await api.get("/api/post/getFeed")
    return  response.data
}

export async function createPost(image, caption){
    const formData = new FormData()//kisi bhi file ko agar hume frontend se backend pr bhjna hain toh humko then we use this method 

    formData.append("image",image)
    formData.append("caption",caption)

    const response = await api.post("/api/post",formData)
    return response.data
}