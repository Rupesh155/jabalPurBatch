// import React, { useState } from 'react'

// const Todo = () => {
//     let [input,SetInput]=useState('')
//     let [data,SetData]=useState([])
//     function done(){
//         SetData([...data,input])
//         console.log(data,"datataatatt");
//         SetInput('')
//     }
//     function delet(index){
//         // console.log(index,"hehehehehe");
//        let newData= data.filter((a,b)=>{
//             return b!==index

//         })
//         SetData(newData)
        
//     }
//   return (
//     <div>
//         <input  type='text' value={input}  onChange={(e)=>SetInput(e.target.value)} placeholder='Enter your todo'/>
//         <button onClick={done}>save</button>  
//         {
//             data.map((val,index)=>{
//                 return(<>
//                 <li>{val}</li>
//                 <button onClick={()=>delet(index)}>click me!!</button>
//                 </>)
//             })
//         }

//     </div>
//   )
// }

// export default Todo




import React from 'react'

const Todo = () => {
  return (
    <div>Todo</div>
  )
}

export default Todo