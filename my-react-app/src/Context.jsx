// import { createContext, useReducer } from "react";

import { createContext, useReducer } from "react";

let Context=   createContext()
export default Context
let data=0
function   reduser(state,action){
    if(action.type==='incre'){
        return state+=1
    }
    else if(action.type==='d'){
        return state-=1
    }
    else if(action.type==='r'){
        return 0
    }
    else{
        return state
    }


}
function ContextProvider({children}){
   let [state,dispatch]=  useReducer(reduser,data)
    return(<>
    <Context.Provider  value={{state,dispatch}}>
   {children}
    </Context.Provider>
    </>)
}
export {ContextProvider}






// let data={
//     cart:[]
// }

// // action={
// //     type:"adddITEM",
// //     PAYLOAD:ITEM
// // }
// function reduser(state,action){
//     if(action.type==='addItem'){
//         return   {
//             ...state,cart:[...state.cart,action.payload]
//             }
        
//     }
//     else{
//     return state
//     }

// }

// function ContextProvider({children}){
//     let [state,dispatch]=useReducer(reduser,data)

//     return(<>
//     <Context.Provider  value={{cart:state.cart,dispatch}}>
//     {children}
//     </Context.Provider>
//     </>)
// }
  
// export  {ContextProvider}



// export default Context




// createContext()