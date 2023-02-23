import { todoReducer } from "../../../src/08-useReducer/todoRecuder";



describe('Pruebas en todoReducer', () => { 
    
    const initialState =[{
        id:1, 
        descripcion :'Demo Todo',
        done: false,
    }];


    test('debe de regresat el estado inicial', () => { 

      const newState = todoReducer( initialState ,{} );
      expect ( newState ).toBe( initialState );

     })

     test('Debe de agregar un Todo', () => { 

        const action = {
            type:'Add Todo',
            payload:{
                id:2, 
                descripcion :'Nuevo Todo #2',
                done: false,
            }

        };
        
        const newState = todoReducer( initialState , action );
        expect ( newState.length ).toBe( 2 );
        expect ( newState ).toContain( action.payload );
      });

      test('debe de realizar el eliminar del todo ', () => { 
        const action = {
            type:'Remove Todo',
            payload: 1,
        };
        const newState = todoReducer(initialState , action );
        
        expect ( newState.length ).toBe( 0 );

       });

      test('debe de realizar el Toggle del todo ', () => {
        const action = {
            type:'Toggle Todo',
            payload: 1,
        };
        const newState = todoReducer(initialState , action );
        expect ( newState[0].done ).toBe( true );

        const newState2 = todoReducer(newState , action );
        expect ( newState2[0].done ).toBe( false );

       });


});
      