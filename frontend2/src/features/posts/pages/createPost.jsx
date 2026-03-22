
import React ,{useState, useRef } from 'react'
import "../style/createPost.scss"
import usePost from '../hooks/usePost'
import { useNavigate } from 'react-router'

const CreatePost = () => {
    const navigate = useNavigate()
    const {loading,handleCreatePost} =usePost()

    const [caption, setcaption] = useState("")
    const postImageInputFieldRef =useRef(null)

    const handleSubmit= async (e)=>{
        e.preventDefault()
        const file =postImageInputFieldRef.current.files[0]
        console.log(file)
        await handleCreatePost(file,caption)
        navigate("/")
    }

    if(loading){
        return(<main><h1>Creating posts....</h1></main>)
    }
  return (
    <main className='create-post-page'>
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label className='create-post-label' htmlFor="postImage">Select Image</label>
                <input ref={postImageInputFieldRef} type="file" name="postImage" id='postImage'/>

                <input value={caption} onInput={(e)=>{setcaption(e.target.value)}} type="text" placeholder='Enter caption' name="caption" id='caption' />

                <button className="button primary-button">Create post</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost
