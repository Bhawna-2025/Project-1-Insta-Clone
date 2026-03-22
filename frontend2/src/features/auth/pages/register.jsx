import React ,{ useState} from 'react'
import '../styles/form.scss'
import { Link } from 'react-router'
import useAuth from '../hooks/useAuth'//hook layer ko laya gya hain jisse use  krke usme value bheji jaye then state update hoga then 
import {useNavigate } from 'react-router'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {Loading,handleRegister} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await handleRegister(username,email,password)
    navigate("/")
  } 

  if(Loading){
    return (<main>
      <h1>Loading...</h1>
    </main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Rigester</h1>
        <form onSubmit={handleSubmit}>
          <input
          onInput={(e)=>{setUsername(e.target.value)}} 
          type="text" 
          name='username' 
          placeholder='Enter Username' />

          <input 
          onInput={(e)=>{setEmail(e.target.value)}}
          type="email" 
          name='email' 
          placeholder='Enter email' />

          <input 
          onInput={(e)=>{setPassword(e.target.value)}}
          type="password" 
          name='password' 
          placeholder='Enter Password' />

          <button className='button  primary-button'>Rejister</button>
        </form>
        <p>Already have an account? <Link to="/login" className='link'>Login</Link> </p>
      </div>
    </main>
  )
}

export default Register
