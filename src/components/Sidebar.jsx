import Chats from "./Chats"
import Navbar from "./navbar"
import Search from "./Search"

function Sidebar() {
  return (
    <>
      <div className="sidebar flex-flex-i bg-sidebar-bg">
        <Navbar />
        <Search />
        <Chats />
        <Chats />
        <Chats />
      </div>
    </>
  )
}

export default Sidebar