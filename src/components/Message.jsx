import User2 from '../assets/user2.jpg'

function Message({message}) {
  return (
    <>
     <div className="flex gap-2 mb-2 flex-row-reverse">
      <div className="">
        <img src={User2} alt=""  className="h-12 w-12 rounded-full ring-2 ring-white object-cover"/>
        <span>{message.timestamp instanceof Date ? message.timestamp.toDate().toLocaleTimeString() : ''}</span>
      </div>
      <div className="max-w-mw-1 flex flex-col gap-3">
        <p className="bg-white p-2 rounded-cu-br max-w-max">{message.text}</p>
      </div>
     </div>
    </>
  )
}

export default Message