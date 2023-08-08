import { AddPhotoAlternate, AttachFile, Send } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/firebase"


function Input({chatId}) {
  const { currentUser } = useContext(AuthContext)
  const [newMessage, setNewMessage] = useState('')

  const handleSend = async () => {
    if (newMessage.trim() !== '') {
      try {
        const message = {
          text: newMessage,
          senderID: currentUser.uid,
          timestamp: serverTimestamp(),
        }

        await addDoc(collection(db, 'chats', chatId, 'messages'), message)
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }

  return (
    <>
      <div className="bg-white h-16 flex items-center p-3 justify-between">
        <input type="text" placeholder="Type here..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="bg-transparent outline-0 p-2 w-full" />
        <div className="flex gap-2 items-center">
          <input type="file" id="file" className="hidden w-40" />
          <label htmlFor="file" className="cursor-pointer text-icon-cl">
            <AttachFile />
          </label>
          <button className=" text-icon-cl"><AddPhotoAlternate /></button>
          <Button onClick={handleSend} className=" "><Send /></Button>
        </div>
      </div>
    </>
  )
}

export default Input