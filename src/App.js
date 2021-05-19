import React, {useEffect} from 'react'; 
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';  
import { useDispatch,useSelector } from 'react-redux';
import Login from './Login';
import {auth} from './Firebase'
import {login,LogOut} from './features/userSlice';

function App() {
  /* We gonna shoot things into data layer using dispatch */
  const dispatch=useDispatch();
  const user=useSelector(selectUser); /* Will give us the user */
  /* useEffect loads once when the component loads */
  useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
     console.log('User is: ',authUser);
    if(authUser){
      /* User is logged in */
      dispatch(
        login({
        uid:authUser.uid,
        photo: authUser.photoURL,
        email:authUser.email,
        displayName: authUser.displayName,
/* Getting user data in oredr to display it  */
      }))
    }else{
      dispatch(LogOut());
        /* The user is logged out */
    }
   

  });
  }, [dispatch]);
  return (
    //BEM naming convention
    <div className="app"> 
     {user ? (
       <>
      <Sidebar />
      <Chat />
      </> 
      

     ): (
      <Login/>
     )}   
      

   
      
      
      
     
    </div>
  );
}

export default App;
