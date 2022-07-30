import React, { useState } from 'react'

export const Toggle = () => {
    const [toggle,setToggle]=useState(true)
  return (
    <div style={{backgroundColor:'black',color:'white',margin:"1rem",padding:'2rem'}}>
        {toggle &&(<p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem aliquid impedit expedita dolores est, ut minima cumque repudiandae necessitatibus
             amet quaerat quibusdam qui delectus consequuntur facilis quisquam accusamus laborum vero?
        </p>)}
        
        <div style={{textAlign:'center'}}>
            <button onClick={()=>{setToggle(!toggle)}}>
              {toggle?'hide':'show'}
            </button>
            
        </div>
    </div>
  )
}
