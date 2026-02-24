
import './App.css'

import Left from './home/left/Left'
import Right from './home/right/right'
import Logout from './home/left1.jsx/logout'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { useAuth } from './context/AuthProvider'


function App() {
  const[authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
     {/* <div className='flex h-screen'>

      {/* <Logout />
      <Left />
      <Right /> */}
    
     {/* </div> */} 

     <Signup />

     {/* <Login /> */}

    </>
  )
}

export default App
