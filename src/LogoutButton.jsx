import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import Layout from "./components/layout/layout";
function Salir() {const {logout}=useContext(AuthContext);
return(<>
  <Layout></Layout>
  <button onClick={logout}>Salir</button>
            
            </>
            )
 
   }
   export default Salir;


