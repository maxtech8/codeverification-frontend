import axios from "axios"
import handleTxError from "@/lib/handleTxError"
import { API_URL } from "./consts"

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    })
    return response.data
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default login
