import React ,{useState} from 'react'
import "../styles/form.scss"
import { Link } from 'react-router'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:4000/api/auth/login",{
      username,
      password
    },{withCredentials:true}).then((e)=>{
      console.log(e)
    })

  }


  return (

    <div>
      <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input  
                onInput={(e)=>{setUsername(e.target.value)}}
                type="text"
                placeholder='Enter username' />

                <input  
                onInput={(e)=>{setPassword(e.target.value)}} 
                type="password" 
                placeholder='Enter password' />

                <button>login</button>
            </form>
            <p>Don't have an account? <Link className='link' to="/register">Register</Link></p>
        </div>
      </main>
    </div>
  )
}

export default Login
