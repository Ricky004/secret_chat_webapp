import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar h-16 bg-navbar-bg flex items-center justify-between p-3'>
      <span className="logo text-white">Secret Chat</span>
      <div className="flex items-center gap-3 ">
      <img src={currentUser.photoURL} alt="" className="h-10 w-10 rounded-full ring-2 ring-white object-cover"/>
      <div className="flex flex-col">
      <span className="text-white font-light">{currentUser.displayName}</span>
      <span className="font-light text-text-s1 text-cu-text-cl2">@ricky001</span>
      </div>
      <button onClick={()=>signOut(auth)} className="logout-btn">sign out</button>
      </div>
    </div>
  )
}

export default Navbar