import AppRouter from "./app.router.jsx"
import "./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { PostContextProvider } from "./features/posts/post.context.jsx"

function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRouter />
      </PostContextProvider >
    </AuthProvider>
  )
}

export default App
