import { Videocam, MoreVert, Add } from '@mui/icons-material';
import Messages from './Messages';
import Input from './Input';
import { useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext';

function Chat() {

  const { currentUser } = useContext(AuthContext)
  const [messages, setMessages] = useState([])
  const chatId = currentUser.uid > 'otherUserUID' ? `${currentUser.uid}_otherUserUID` : `otherUserUID_${currentUser.uid}`
  const messagesRef = collection(db, "chats", chatId, 'messages')
  
  useEffect(() => {
    const q = query(messagesRef, orderBy('timestamp'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageData = snapshot.docs.map((doc) => doc.data())
      setMessages(messageData)
    })

    return () => unsubscribe()
  }, [messagesRef])

  return (
    <>
      <div className="Chat flex-flex-j">
        <div className="h-16 bg-navbar-bg-2 flex items-center justify-between p-3">
          <span className="text-white">Tridip</span>
          <div className="flex gap-2">
            <button className="text-white"><Videocam /></button>
            <button className="text-white"><Add /></button>
            <button className="text-white"><MoreVert /></button>
          </div>
        </div>
        <div className="bg-chat-bg p-2 h-[calc(100%-8rem)] overflow-y-scroll ">
          {messages.map((message, index) => (
             <Messages key={index} message={message} />
          ))}
        </div>
        <Input chatId={chatId}/>

      </div>
    </>
  )
}

export default Chat