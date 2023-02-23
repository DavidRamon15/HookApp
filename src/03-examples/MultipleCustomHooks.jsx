
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from './';




export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const {data ,isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const {id , name } = !!data && data;
  return (

    <>
        <h1>RICK AND MORTY</h1>
        <hr />
        {
            isLoading
            ? (
                <LoadingQuote /> 
            )
            : (
                <Quote id={id} name={name}  />
            )
        }

        <button className='btn btn-primary'
         disabled ={ isLoading}
         onClick={() => increment(1) } >
            Next Quote
        </button>
    </>
  )
}

