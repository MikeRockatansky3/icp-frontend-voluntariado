
import "./App.css";

import { useState } from "react";
function Form() {
  const [formValues] = useState({
      text: "",
      password: "",
      date: "",
      number: "",
      select: "1",
  });

  
  function validar(){
    
    {formValues.text=="cosas" && "Log out" ; "Log in"}
      <div className="right"><h1>bienvenido</h1></div>
    
  }
  return(<div className="left"><form>
            <input
                type="text"
                name="text"
                
               
                placeholder="Texto"
            />
            <input
                type="password"
                name="password"
                
                placeholder="Contraseña"
            /><button onClick={validar}>Entrar</button>
           </form></div>)

  }
export default Form;
