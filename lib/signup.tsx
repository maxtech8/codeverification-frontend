import axios from "axios"
import handleTxError from "@/lib/handleTxError"
import { API_URL } from "./consts"

const signup = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      firstName,
      lastName,
      email,
      password,
    })
    return response.data
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default signup
