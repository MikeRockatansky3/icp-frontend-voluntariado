import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import Layout from "./components/layout/layout";
function Appi() {const {login}=useContext(AuthContext);
  const [formValues,setFormValues] = useState({
      text: "",
      password: "",
      date: "",
      number: "",
      select: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
        ...formValues,
        [name]: value,
    });
};
const handleSubmit = (e) => {
  e.preventDefault(); // Evita que el formulario adopte el comportamiento por defecto
  console.log(formValues); // Muestra los valores del formulario en la consola del navegador
}; 
  
    
  
  return(<>
  <Layout></Layout><form onSubmit={handleSubmit}>
       
       
            <input
                type="text"
                name="text"
                onChange={handleChange}
               
                placeholder="Texto"
            />
            <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Contraseña"
            /><button onClick={login}>Log in</button>
            
           </form></>
           )

  }
  export default Appi;
