//navigation -- esme hum links banate hain jaise /login laga diya toh us page pr pahauch jaye aur agr /register lga diya toh us par
import {BrowserRouter,Routes,Route } from 'react-router'
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/register"
import Feed from './features/posts/pages/Feed'
import CreatePost from './features/posts/pages/createPost'

function AppRoutes(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/' element={<Feed/>} />
            <Route path='/createPost' element={<CreatePost/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
