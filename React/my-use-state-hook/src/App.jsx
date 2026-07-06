// import React from "react";


// function App(){
// //Normal Varible in Js

// let count = 0

// function increase(){
//   count = count + 1;
//   console.log(count)
// }

//   return(
//     <div>
//        <h2>Count/ Cart : {count}   </h2>
//        <button onClick={increase}>Click Me</button>
//     </div>
//   )


// }
// export default App


//Example 2 - useState
// import { useState } from "react";

// function App(){

//   // const [MainvariableName , setVariableName] = useState(Inital Value)

//   const [count , setCount] = useState(0)

//   function increase(){
//          setCount(count + 1)
//          console.log(count)
//   }

//   return(
//     <div>
//       <h2>Count/Cart : {count} </h2>
//       <button onClick={increase}>Click Me</button>
//     </div>
//   )

// }
// export default App


//example - Instagram Like - camelCase
// import { useState } from "react";

// function App(){

//   const [likes , setLike] = useState(44)

//   function increaseLike(){
//     setLike(likes + 1)
//   }

//   return(
//     <div>
//       <h3>Likes : {likes} </h3>
//       <button onClick={increaseLike}>💖Like</button>
//     </div>
//   )
// }
// export default App



//example 3 - Hide/Show Password
import { useState } from "react";

function App(){

const [show , setShow] = useState(false)

return(
  <div>
    <input type={show ? "text" : "password"}    placeholder="Enter Your Password"  />

    <button  onClick={  ()=> setShow(!show)}>  {show ? "hide" : "show "}   </button>
  </div>
)

}
export default App