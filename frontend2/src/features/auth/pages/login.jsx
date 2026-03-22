import React, {useState} from 'react'
import "../styles/form.scss"
import { Link } from 'react-router'
import useAuth   from '../hooks/useAuth'//hook layer se uthaya gya 
import { useNavigate } from 'react-router'

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  
  const { Loading,handleLogin }= useAuth()//yha se hum updated jo response main aye hain voh fetch kr rhe hain 
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault() 
    await handleLogin(username,password)
    console.log("User Logged In")
    navigate("/")
  }

  if(Loading){
    return(<main>
      <h1>Loading....</h1>
    </main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setusername(e.target.value)
            }}
            type="text"
            name='username'
            placeholder='Enter Username' />

          <input
            onInput={(e) => {
              setpassword(e.target.value)
            }}
            type="password"
            name='password'
            placeholder='Enter Password' />

          <button className='button  primary-button'>Login</button>
        </form>
        <p>Not registered? <Link to="/register" className='link'>register</Link> </p>
      </div>
    </main>
  )
}

export default Login
