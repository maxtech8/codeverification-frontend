import getCookie from "@/lib/getCookie"
import LoginButton from "./LoginButton"
import SignUpButton from "./SignUpButton"
import LogOutButton from "./LogOutButton"

const AuthButtons = () => {
  let accessToken = ""
  if (typeof window !== "undefined") {
    accessToken = getCookie("token")
  }

  return (
    <div className="flex gap-[25px] items-center">
      {accessToken ? (
        <LogOutButton />
      ) : (
        <>
          <SignUpButton />
          <LoginButton />
        </>
      )}
    </div>
  )
}

export default AuthButtons
