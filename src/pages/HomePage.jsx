import Chat from "../components/chat"
import Sidebar from "../components/sidebar"

function HomePage() {
  return (
    <>
      <div className="home bg-cu-bg h-screen flex justify-center items-center">
        <div className="container border-border-1 border-white w-w-home h-h-home rounded-lg flex overflow-hidden">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  )
}

export default HomePage