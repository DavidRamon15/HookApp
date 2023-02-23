import { useState } from "react"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {

  /*  const user ={
        user:123,
        email:'davidramoncasanova@gmail.com',
        name : 'David '
    }
    */
   const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{ user  ,setUser }}>
        { children }
    </UserContext.Provider>
  )
}



















