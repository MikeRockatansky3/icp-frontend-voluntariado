import { Link } from "react-router-dom"
import "./layout.css"
const Layout=()=>{

    return(<div>
        <h1>Menu</h1>

        
        <nav className="content-bottom">

        <button className="bot"><Link to="/" className="link">Entrar</Link></button><br></br>
        
        <button className="bot" ><Link to="/openchat" className="link">Openchat</Link></button>

        <button className="bot" ><Link to="/Voluntariados" className="link">Campañas</Link></button></nav>

    </div>)
}
export default Layout;