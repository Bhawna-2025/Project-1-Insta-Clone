import React, {useState} from 'react'
import "../styles/form.scss"
import { Link } from 'react-router'
import axios from 'axios'

const Register = () => {
  
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e){
      e.preventDefault()

      axios.post("http://localhost:4000/api/auth/register",{
        username,
        email,
        password
      },{withCredentials:true}).then(res=>{
        console.log(res)
      })

    }


  return (
    <div>
      <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input onInput={(e)=>{setUsername(e.target.value)}}
                 type="text" 
                 name="username"
                 placeholder='Enter username' />

                <input onInput={(e)=>{setEmail(e.target.value)}} 
                type="text" 
                name="email"
                placeholder='Enter email' />

                <input onInput={(e)=>{setPassword(e.target.value)}}
                 type="password" 
                 name='password'
                 placeholder='Enter password' />

               <button>Register</button>
            </form>
            <p>Already have an account? <Link className='link' to="/login">login</Link></p>
        </div>
      </main>
    </div>
  )
}

export default Register
