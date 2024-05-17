import signup from "@/lib/signup"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"

const useSignUpData = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userSignUp = async () => {
    if (!firstName || !lastName || !email || !password) toast.error("required!")
    let response = await signup(firstName, lastName, email, password)
    const { error } = response as any
    if (error) return
    toast.success("Success!")
    router.push("/login")
  }

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    userSignUp,
  }
}

export default useSignUpData
