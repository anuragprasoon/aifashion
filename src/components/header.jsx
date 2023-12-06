import logo from '../hoodiny.png';
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <div className='nav'>
            <img src={logo} className='logonav' alt='hoodiny logo'/>
            <a href="/privacy"className='privacylink'>Privacy</a>
        </div>
    );
}
export default Header;