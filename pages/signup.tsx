import SignUpPage from "@/components/Pages/SignUpPage"
import SignUpProvider from "@/providers/SignUpProvider"

const SignUp = () => (
  <SignUpProvider>
    <SignUpPage />
  </SignUpProvider>
)

export default SignUp
