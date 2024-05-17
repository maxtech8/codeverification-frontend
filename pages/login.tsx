import LogInPage from "@/components/Pages/LoginPage"
import LogInProvider from "@/providers/LogInProvider"

const SignUp = () => (
  <LogInProvider>
    <LogInPage />
  </LogInProvider>
)

export default SignUp
