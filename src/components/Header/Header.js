import {Link} from 'react-router-dom';
import logo from './img/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const Header = () => {

    return(
        <div>
            <header>
                <div className="logoContainer">
                    <Link to='/'><img className="logo" src={logo}/></Link>
                </div>
                <nav className='menuContainer'>
                    <Link to='/productos/remeras' className='categories'>Remeras</Link>
                    <Link to='/productos/posters' className='categories'>Posters</Link>
                    <Link to='/productos/tazas' className='categories'>Tazas</Link>
                    <CartWidget/>
                </nav>
            </header>
        </div>
    )
}

export default Header;