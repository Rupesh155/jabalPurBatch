import React, { useContext, useState } from 'react'
import Context from './Context'

const CardData = ({apiData}) => {

   let {dispatch}=    useContext(Context)
  // console.log( useContext(Context),"kuyaaaaaaa");
  
  const addToCart=(item)=>{
    // console.log(item,"itemmmmmmm");
    dispatch({
      type:'addItem',
      payload:item

    })
    

  }
    
  return (
    <div>
            {
        apiData.map((val)=>{
          return(<>
          <div id='card'>  
          <img    src={val.image}/>
          <p>  {val.name}</p>
          <button onClick={()=>addToCart(val)} >click</button>
          {/* <button   onClick={()=>SetStoreData([...storeData,val])}>addToCart</button> */}
          </div>
          </>)
        })
      }
    </div>
  )
}

export default CardData