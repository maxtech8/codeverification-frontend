import { createContext, useContext, useMemo } from "react"
import useLogInData from "../hooks/useLogInData"

const LogInContext = createContext(null)

const LogInProvider = ({ children }) => {
  const logIndata = useLogInData()

  const value = useMemo(
    () => ({
      ...logIndata,
    }),
    [logIndata],
  )

  return <LogInContext.Provider value={value}>{children}</LogInContext.Provider>
}

export const useLogIn = () => {
  const context = useContext(LogInContext)
  if (!context) {
    throw new Error("useLogIn must be used within an LogInProvider")
  }
  return context
}

export default LogInProvider
