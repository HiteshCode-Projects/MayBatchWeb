// import {BrowserRouter , Routes , Route } from 'react-router-dom'

// function Home(){
// return <h1>Home Page</h1>
// }

// function About(){
// return <h1>About Page</h1>
// }

// function App(){

// return(
//   <BrowserRouter>
 
 
// <Routes>

//   <Route  path="/"    element={<Home />}  />

//   <Route  path="/about" element={<About />} />

// </Routes>

 
//   </BrowserRouter>
// )

// }

// export default App;


//Example 2 - WIth Navigation

// import {BrowserRouter , Routes , Route, Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// function Home(){
// return <h1>Product Page</h1>
// }

// function Cart(){
// return <h1>Cart Page</h1>
// }






// function App(){

  

 


// return(
//   <BrowserRouter>



 
//  <nav>
//   <Link to="/" >Home</Link>
//   <Link to="/cart" >Cart</Link>
//  </nav>
 
// <Routes>

//   <Route  path="/"    element={<Home />}  />

//   <Route  path="/cart" element={<Cart />} />

  

// </Routes>



 
//   </BrowserRouter>
// )

// }

// export default App;

//useNaviagte() Hooks

//Example 3 

import { BrowserRouter, Routes , Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App(){
  return(
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login />}></Route>

      <Route path="/home" element={<Home />}></Route>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App