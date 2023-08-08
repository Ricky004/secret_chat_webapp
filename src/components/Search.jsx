import { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore"
import { db } from '../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

function Search() {

  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)

  const { currentUser } = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName))

    try {
      setLoading(true)

      const querySnapshot = await getDocs(q)


      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })

      setErr(false)
    } catch (err) {
      setErr(true)
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async () => {
    const combineId = currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid
    try {
      setLoading(true)

      const chatDocRef = doc(db, "chats", combineId)
      const chatDocSnapshot = await getDoc(chatDocRef)

      if (!chatDocSnapshot.exists()) {

        await setDoc(chatDocRef, { messages: [] })

        const userChatUpdate = {
          [`${combineId}.userInfo`]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [`${combineId}.date`]: serverTimestamp()
        }

        const currentUserChatRef = doc(db, "userChats", currentUser.uid);
        await updateDoc(currentUserChatRef, userChatUpdate);

        const otherUserChatRef = doc(db, "userChats", user.uid);
        await updateDoc(otherUserChatRef, userChatUpdate);

      }
     
      setErr(false)
    } catch (err) {
      setErr(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="border-b-border-1">
        <div className="">
          <input type="text" placeholder="Find a user" onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} className=" bg-transparent outline-0 border-gray-400 p-2" />
        </div>
        {err && <span>User not found</span>}
        {loading ? ( <div>Loading...</div> ) : 
        (user && (<div onClick={handleSelect} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-cu-logo">
          <img src={user.photoURL} alt="" className="h-12 w-12 rounded-full ring-2 ring-white" />
          <div className="">
            <span className="text-white">{user.displayName}</span>
          </div>
        </div> 
          )
        )}
      </div>
    </>
  )
}

export default Search