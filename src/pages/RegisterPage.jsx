import Add from '../assets/add-file.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db, storage } from '../firebase/firebase'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, Link} from 'react-router-dom'

function RegisterPage() {

  const [err, setErr] = useState(false)
  const nanigate = useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {

      const res = await createUserWithEmailAndPassword(auth, email, password)

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

     
      await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            await addDoc(collection(db, "users"), {
              uid: res.user.uid,
              displayName,
              email,
              password,
              photoURL: downloadURL,
            })
             
            await addDoc(collection(db,"userChats"), {
              
            })
            nanigate("/")
          });
          
        }
      );

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
          <span className="title font-normal text-gray-500">Register</span>
          <form action="" onSubmit={handelSubmit} className="form flex flex-col gap-2 w-full">
            <input type="text" placeholder='display name' className="text-field" />
            <input type="email" placeholder='email' className="text-field" />
            <input type="password" placeholder='password' className="text-field" />
            <input type="file" id="file" className="hidden w-40" />
            <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
              <img src={Add} />
              <span className=" text-cu-text-cl1" >Add an avatar here</span>
            </label>
            <button className="register-button">Sign up</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p className="text-xs text-cu-text-cl1">You do have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default RegisterPage