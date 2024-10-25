// import React, { useState } from 'react'


// // functionL COMP+react HOOK =DYM



// const App = () => {
//  let [count,SetCount]=      useState(0)
// //  let [color,SetColor]=      useState('red')
//  let [bool,SetBool]=  useState(false)
//   function fun1(){
//     console.log('hello');
//     SetCount(count+1) 
//   }

//   function color(){
//     // SetBool(true)
//     if(bool){
//       SetBool(false)

//     }
//     else{
//       SetBool(true)
//     }
//   }
//   return (
//     <div  style={bool?{backgroundColor:'red'}:{backgroundColor:"green"}}>
//       <h2> {count}</h2>
//       <button onClick={fun1}> ++</button>
//       <button onClick={()=>SetCount(count-1)}> --</button>
//       <button onClick={()=>SetCount(0)}> reset</button>



//       <button onClick={color} >changeColor</button>


//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// const App = () => {
//   let [time,SetTime]=useState()
// setInterval(()=>{
//     let date=   new Date().toLocaleTimeString()
//     SetTime(date)
// })
//   return (
//     <div>
//    <h2> {time}</h2>
//     </div>
//   )
// }

// export default App


  // import React, { useEffect, useState } from 'react'
  // import Home from './Home'
  // import './App.css'
  // const App = () => {
  //   // let user='hellooo'
  //   // let [state,SetState]=useState(0)
  //   // let [city,SetCity]=useState('BHOPAL')
  //   let [data,SetData]=useState([])

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/recipes').then((res)=>{
  //     return res.json()
  //   }).then((val)=>{
  //     console.log(val.recipes);
  //     SetData(val.recipes)
  //   })
  // },[] )

  //   return (
  //     <div>
  //       {/* <Home  data={user}/> */}
  //       {/* <button onClick={()=>SetState(state+1)}>click me </button>

  //       <h1> {city}</h1>
  //       <button onClick={()=>SetCity('jabalpur')}>cityChange</button> */}


  //       {
  //         data.map((a)=>{
  //           return(<>
  //           <div id='card'>   
  //           <img   src={a.image}/>
  //           <p>  {a.name}</p>
  //           <button>mujhe dekhoo</button>
  //           </div>
  //           </>)
  //         })
  //       }

  //     </div>
  //   )
  // }

  // export default App




  // import React, { useState } from 'react'
  // const App = () => {
  //   let [input,SetInput]=useState({
  //     firstName:" ",
  //     lastName:"",
     
  //   })  
  //   function fun1(e){
  //      let {name,value}=    e.target
  //      SetInput({...input,[name]:value})
  //      console.log(input,"heheh");   
  //   }
  //   return (
  //     <div>
  //       {/* <h1>  {input}</h1> */}
  //       <fieldset>   
  //     <form>
  //       <input   onChange={fun1} type='text'  name='firstName'  value={input.firstName} placeholder='Enter your firstName'/>
  //       <br></br>
  //       <br></br>
  //       <input  type='text'  onChange={fun1}  name='lastName' value={input.lastName} placeholder='Enter your lastName'/>


  //       <br></br>
  //       <br></br>
  //       <button>save</button>
  //     </form>
  //     </fieldset>
  //     </div>
  //   )
  // }
  
  // export default App   




  // let obj={
  //    id:1,
  //    name:'hello',
  //    lastName:"jain"

  // }
  // let a=obj.id
  // let {id}=obj


//   import React,{useState} from 'react'
//   import Todo from './Todo'
// import NavBar from './NavBar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import './App.css'
// import Cart from './Cart'
//   const App = () => {


//     return (
//       <div>
//         {/* <Todo/> */}
//         <NavBar/>

//         <Routes>
//           <Route path='/'   element={<Home      />} />
  
//           <Route   path='/cart'   element={<Cart  />}/>

//         </Routes>
//       </div>
//     )
//   }
  
//   export default App





// import React, { useReducer } from 'react'
// const App = () => {
//   function reduser(count,action){
//     if(action.type==='incre'){
//       return count+=1
//     }
//     else if(action.type==='derc'){
//       return count-=1
//     }
//     else if(action.type==='reset'){
//       return 0
//     }
//     else{
//       return count
//     }

//   }
//    let [count,dispatch]=    useReducer(reduser,0)

//   return (
//     <div>
//       <h3>  {count}</h3>
//       <button  onClick={()=>dispatch({type:'incre'})}>++</button>
//       <button  onClick={()=>dispatch({type:'derc'})}>--</button>
//       <button  onClick={()=>dispatch({type:'reset'})}>reset</button>


//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App



// import React, { useReducer } from 'react'

// const App = () => {
//   let data=0
//   function reduser(state,action){
//     if(action.type==='incre'){
//       return state+=1
//     }
//     else if(action.type==='derc'){
//       return state-=1
//     }

//   }
//    let [state,dispatch] =  useReducer(reduser,data)
//    function add(){
// dispatch({type:"incre"})
//    }
//   return (
//     <div>
//       <button onClick={add}>++</button>
//       <button onClick={()=>dispatch({type:'derc'})}>--</button>
//       <button onCl>reset</button>

      


//     </div>
//   )
// }

// export default App
import React, { useContext } from 'react'
import Context from './Context'

const App = () => {


 let {state ,dispatch}=     useContext(Context)
  return (
    <div>
      <h1>{state}</h1>
      <button  onClick={()=>dispatch({type:'incre'})}>++</button>
      <button onClick={()=>dispatch({type:'d'})}>--</button> 
      <button onClick={()=>dispatch({type:'r'})}>reset</button>   

    </div>
  )
}

export default App