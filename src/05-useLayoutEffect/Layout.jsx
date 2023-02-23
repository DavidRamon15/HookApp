
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples';




export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const {data ,isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const {id , name } = !!data && data;
  return (

    <>
        <h1>r&m</h1>
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
