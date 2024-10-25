import React, { useContext } from 'react'
import Context from './Context'

const Cart = () => {

    let {cart}=   useContext(Context)
    console.log(cart,"kyaa mil rhaa haiiiiii");
    
 
    
  return (
    <div>
               {
      cart.map((val)=>{
          return(<>
          <div id='card'>  
          <img    src={val.image}/>
          <p>  {val.name}</p>

          </div>
          </>)
        })
      }
    </div>
  )
}

export default Cart