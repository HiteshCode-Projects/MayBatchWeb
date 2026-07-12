// import React from 'react'

// const App = () => {

// function handleClick(){
//   alert('Button Clicked')
// }

//   return (
//     <div>
      
//     <button  onClick={handleClick}     >Click Me</button>


//     </div>
//   )
// }

// export default App



//Example 2-

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//  const [isFollowed , setIsFollowed ] = useState(false)



//   return (
//     <div>
//           <button  onClick={ ()=> setIsFollowed(!isFollowed) }   > {isFollowed ? "Following" : "Follow"}   </button>
//     </div>
//   )
// }

// export default App



//Example 3 - 
// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [text , setText ] = useState("") 

//   return (
//     <div>
//       <input
//       placeholder='Search ....'
//       onChange={  (e)=>  setText(e.target.value) }
      
//       />


//       <h3>you Typed :    {text} </h3>

//     </div>
//   )
// }

// export default App


//Example 4:
import { useState } from "react";

import React from 'react'

const App = () => {

const [color , setColor ] = useState("white")

  return (
    <div style={{  backgroundColor:color , height:'100vh'     }}>
      <button onClick={()=>setColor("red")   }>Red</button>
      <button onClick={()=>setColor("blue")   }>Blue</button>
      <button onClick={()=>setColor("green")   }>Green</button>

    </div>
  )
}

export default App



