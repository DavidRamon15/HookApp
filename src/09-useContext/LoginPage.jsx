import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user ,setUser} = useContext( UserContext );
  


    return (
      <>
        <h1>LoginPage</h1>
        <hr></hr>

        <pre aria-label="pre">
          { JSON.stringify(user, null, 3) }
        </pre>
        
        <button 
          className="btn btn-primary"
          aria-label="btn-create"
          onClick={ () => setUser({id:123 , email:'davidramoncasanova@gmail.com' ,name:'David'}) }
          
          
          >
           Establecer Usuario
        </button>
      </>
    )
  }
