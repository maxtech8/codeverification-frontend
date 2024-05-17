import login from "@/lib/login"
import setCookie from "@/lib/setCookie"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"

const useLoginUIData = () => {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const loginUser = async () => {
    const response = await login(userEmail, userPassword)
    const { error } = response as any
    if (error) return

    setCookie("token", response.token)
    toast.success("Success!")
    router.push("/")
  }

  return {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    loginUser,
  }
}

export default useLoginUIData
