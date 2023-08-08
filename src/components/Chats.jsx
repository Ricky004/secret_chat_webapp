import user1 from '../assets/user1.jpg'

function Chats() {
  return (
    <>
      <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-cu-logo">
          <img src={user1} alt="" className="h-12 w-12 rounded-full ring-2 ring-white object-cover"/>
          <div className="">
            <span className="text-white">Anirban Das</span>
            <p className="text-text-s1 text-cu-text-cl2">hello</p>
          </div>
        </div>
    </>
  )
}

export default Chats