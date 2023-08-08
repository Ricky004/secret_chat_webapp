import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"

function LoginPage() {

  const [err, setErr] = useState(false)
  const nanigate = useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      nanigate("/")

    } catch (err) {
      console.error("Error:", err)
      setErr(true)
    }

  }

  return (
    <>
      <div className="form-container bg-cu-bg h-screen flex items-center justify-center">
        <div className="form-wrapper flex flex-col gap-3 bg-white rounded-lg items-center px-10 py-5 w-80">
          <span className="logo">Secret Chat</span>
          <span className="title font-normal text-gray-500">Login</span>
          <form onSubmit={handelSubmit} action="" className="form flex flex-col gap-2 w-full">
            <input type="email" placeholder='email' className="text-field" />
            <input type="password" placeholder='password' className="text-field" />
            <button className="register-button">Sign in</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p className=" text-xs text-cu-text-cl1">You do have an account? <Link to="/register">Sign up</Link></p>
        </div>
      </div>
    </>
  )
}

export default LoginPage