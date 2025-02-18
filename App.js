import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Login from './Login';
import Register from './Register'
import UserHome from './user/UserHome';
import { useSelector } from 'react-redux';
import WrongPage from './WrongPage';
import Users from './user/Users';
import Profile from './user/Profile';
import ChangePassword from './user/ChangePassword';

 function App()
{
  const uinfo = useSelector(state=>state.uinfo.value)
  return <>
      <Menu/>

      <Routes>
        {uinfo.isLogin?<>        
          <Route path="/home" element={<UserHome/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>
        </>:<>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>        
        </>}
       
       <Route path="*" element={<WrongPage/>}/>

       
      </Routes>
  </>
}
export default App;