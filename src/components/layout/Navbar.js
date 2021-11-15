import { useLocation } from "react-router-dom";
import Navbarmenu from './Navbarmenu';


const NavBar = () => {
    const location = useLocation();
    return location.pathname === '/signin' ? null : <Navbarmenu />
}

export default NavBar;