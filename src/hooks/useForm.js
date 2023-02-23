import { useState } from "react";



export const useForm = ( initialForm = { }) => {
    const [formState, setfformState] = useState( initialForm );
    
    const onInputChange = ({target}) =>{
        const {name , value} = target;
        setfformState({
            ...formState,
            [name] : value
        })
    }
    const onResetForm = () =>{
        setfformState(initialForm);
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}

