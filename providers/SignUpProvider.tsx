import { createContext, useContext, useMemo } from "react"
import useSignUpData from "../hooks/useSignUpData"

const SignUpContext = createContext(null)

const SignUpProvider = ({ children }) => {
  const signUpdata = useSignUpData()

  const value = useMemo(
    () => ({
      ...signUpdata,
    }),
    [signUpdata],
  )

  return <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
}

export const useSignUp = () => {
  const context = useContext(SignUpContext)
  if (!context) {
    throw new Error("useSignUp must be used within an SignUpProvider")
  }
  return context
}

export default SignUpProvider
