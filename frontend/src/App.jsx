import AppRoutes from "./routes"
import "../src/style.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx"

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
