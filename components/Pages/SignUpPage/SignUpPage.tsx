import Link from "next/link"
import { useSignUp } from "../../../providers/SignUpProvider"
import GradientButton from "@/components/GradientButton"
import Layout from "@/components/Layouts"
import Input from "@/shared/Input"

const SignUpPage = () => {
  const { setFirstName, setLastName, setEmail, setPassword, userSignUp } = useSignUp()
  const changeUserEmail = (e) => {
    setEmail(e.target.value)
  }

  const changeUserPassword = (e) => {
    setPassword(e.target.value)
  }

  const changeFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const changeLastName = (e) => {
    setLastName(e.target.value)
  }

  return (
    <Layout type="base">
      <div
        className="w-[300px]  m-auto 
                    flex flex-col justify-center items-center 
                    gap-[20px] text-white  py-4 px-6 mt-5"
      >
        <Input onChange={changeFirstName} placeholder="First Name" type="text" />
        <Input onChange={changeLastName} placeholder="Last Name" type="text" />
        <Input onChange={changeUserEmail} placeholder="Email" type="text" />
        <Input onChange={changeUserPassword} placeholder="Password" type="password" />
        <button type="button" onClick={userSignUp}>
          <GradientButton>
            <p>Confirm</p>
          </GradientButton>
        </button>
        <p className="w-max">
          Already have an account?
          <Link href="/login">
            <span className=" ml-2 text-blue underline">Sign In</span>
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default SignUpPage
