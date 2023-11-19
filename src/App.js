import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './ui-components/Login';
import Signup from './ui-components/Signup';
import Main from './ui-components/Main';
import AddPost from './elements/AddPost';
import Viewall from './elements/Viewall';
import Myprofile from './elements/Myprofile';
import { RequireAuth } from './elements/Auth';
import { Logout } from './elements/Logout';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign" element={<Signup/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path='/addpost' element={<RequireAuth><Main child={<AddPost/>}/></RequireAuth>}/>
        <Route path='/viewall' element={<RequireAuth><Main child={<Viewall/>}/></RequireAuth>}/>
        <Route path='/myprofile' element={<RequireAuth><Main child={<Myprofile/>}/></RequireAuth>}/>
        
      </Routes>
    </div>
  );
}

export default App;
