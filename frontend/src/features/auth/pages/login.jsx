import React ,{useState} from 'react'
import "../styles/form.scss"
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {handleLogin} = useAuth()

  async function handleSubmit(e){
    e.preventDefault()
    handleLogin(username,password)
    .then(res=>{
      console.log(res)
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
