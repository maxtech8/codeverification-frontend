import Link from "next/link"
import Input from "@/shared/Input"
import { useLogIn } from "@/providers/LogInProvider"
import GradientButton from "@/components/GradientButton"
import Layout from "@/components/Layouts"

const LogInPage = () => {
  const { setUserEmail, setUserPassword, loginUser } = useLogIn()
  const changeUserEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const changeUserPassword = (e) => {
    setUserPassword(e.target.value)
  }

  return (
    <Layout type="base">
      <div
        className="w-[300px]  m-auto 
                  flex flex-col justify-center items-center 
                  gap-[20px] text-white  py-4 px-6 mt-5"
      >
        <Input onChange={changeUserEmail} placeholder="Email"/>
        <Input onChange={changeUserPassword} placeholder="password" type="password"/>
        <button type="button" onClick={loginUser}>
          <GradientButton>
            <p>Confirm</p>
          </GradientButton>
        </button>
        <p>
          {`Don't have an account?`}
          <Link href="/signup">
            <span className="ml-2 text-blue underline">Sign Up</span>
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default LogInPage
