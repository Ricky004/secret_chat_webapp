import { useState } from "react"

export default function Form() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    const onSubmit = (e) => {
      e.preventDefault()
      if (email && password) {
      const newAllEntry = {id: new Date().getTime().toString() ,email, password}
      setAllEntry([...allEntry, newAllEntry])
      setEmail("")
      setPassword("")
      }
    }
  return (
    <>
    <div className=" max-w-sm flex justify-center items-center p-5">
     <form action="" onSubmit={onSubmit} className="border-[1px] border-gray-300 p-3"> 
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} className="text-field" />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} className="text-field" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium 
         rounded-lg text-sm px-5 py-2 text-center m-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
     </form>
     </div>
    </>
  ) 
} 
