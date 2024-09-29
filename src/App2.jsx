
import LoginButton from './LoginButton.jsx';
import Salir from './LogoutButton.jsx';
import Voluntariados from './Voluntariados.jsx';
import Registro from './Registro.jsx';
import {  Routes, Route} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';
import Appi from "./App";
import "./App.css";

function App() {
  
  const { isAuthenticated } = useContext(AuthContext);
  return (<>
   
  
    <Routes>
    
      <Route path="/openchat" element={isAuthenticated ? <Appi/>:<LoginButton/>}/>
      <Route path="/" element={isAuthenticated ? <Salir/>:<LoginButton/>}/>
      <Route path="/Voluntariados" element={isAuthenticated ?<><Voluntariados></Voluntariados><Registro></Registro></>:<LoginButton/>}/>
    
    </Routes>
  
  
  
</>
  );
}

export default App;