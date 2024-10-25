

// import React from 'react'
// import New from './New'

// const Home = ({data}) => {
//   console.log(data,'koi mil gyaa');
  
//   return (
//     <div>
//       <New   kuchbi={data}/>
//     </div>
//   )
// }

// export default Home




// function sum(a){

// }
// sum(5)




// import React, { useContext } from 'react'
// import Context from './Context'
// const Home = () => {
//  let data=    useContext(Context)
//  console.log(data,"koi mil gyaaa");
 
//   return (
//     <div>
//       <h1>      {data}</h1>
//     </div>
//   )
// }

// export default Home



import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import CardData from './CardData'
const Home = () => {
  let [apiData,SetApiData]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then((res)=>{
      return res.json()

    }).then((data)=>{
      console.log(data.recipes);
      SetApiData(data.recipes)
      
    })

  },[])
   

  return (
    <div>
       <CardData       apiData={apiData}/>
    </div>
  )
}

export default Home