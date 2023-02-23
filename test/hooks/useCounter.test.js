const { renderHook } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { useCounter } = require("../../src/hooks/useCounter");

describe('Pruebas en el useCounter ', () => { 

    test('Debe de retornar los valores por defecto ', () => { 

      const {result  } =   renderHook( () => useCounter() );
      const { counter , decrement , increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual( expect.any( Function ) );
        expect(increment).toEqual( expect.any( Function ) );
        expect(reset).toEqual( expect.any( Function ) );

     })

     test('debe de generar el counter con el valor de 100 ', () => { 
        const { result  } =   renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect (counter).toBe(100);
      });

     test('Debe de incrementar el contador ', () => { 
        const { result  } =   renderHook( () => useCounter(10) );
        const { increment } = result.current;
        act( () => { 
            increment();
            increment(2);
        });
        expect( result.current.counter ).toBe(13);
      });
     
      test('Debe de incrementar el contador ', () => { 
        const { result  } =   renderHook( () => useCounter(10) );
        const { decrement } = result.current;
        act( () => { 
            decrement();
            decrement(2);
        });
        expect( result.current.counter ).toBe(7);
      });

      test('Debe de realizar el RESET del contador ', () => { 
        const { result  } =   renderHook( () => useCounter(10) );
        const { decrement , reset } = result.current;
        act( () => { 
            decrement();
            reset();
        });
        expect( result.current.counter ).toBe(10);
      });
 })

