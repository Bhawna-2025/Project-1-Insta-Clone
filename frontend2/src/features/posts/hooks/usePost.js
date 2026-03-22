//post hook layer 

import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed ,createPost } from "../service/post.api";

const usePost=()=>{
        const context =useContext(PostContext)
        const {loading,setloading,post,feed,setfeed}=context

        const handleFeed= async()=>{
                setloading(true)
                const data=await getFeed();
                setfeed(data.posts)
                setloading(false)
        }
        const handleCreatePost =async()=>{
                setloading(true)
                const data=await createPost();
                setfeed([data.post,...feed]) 
                setloading(false)
        }


        return{loading,feed,post,handleFeed,handleCreatePost}
}


export default usePost