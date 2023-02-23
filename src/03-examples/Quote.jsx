import React, { useLayoutEffect, useRef ,useState} from 'react';
import  PropsTypes  from 'prop-types';

export const Quote = ({ id , name }) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState( { width:0 ,height:0 } )

  useLayoutEffect( () => {
   
    const { height ,  width } = pRef.current.getBoundingClientRect();
    
    setBoxSize({ width , height });

  }, [Quote])


  return (
   <>
        <blockquote className='blockquote text-end'
          
          style={{display : 'flex' }}
          >
            <p className='mb-1'
            ref={pRef}>{id}</p>
            <footer className='blockquote-footer'>{name}</footer> 
        </blockquote>

        <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}

Quote.propTypes = {
    id: PropsTypes.number,
    name: PropsTypes.string,
}

