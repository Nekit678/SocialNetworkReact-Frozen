import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {

    return (
        <header className={s.header}>
            <img src="https://simg.nicepng.com/png/small/826-8263562_the-react-logo-react-js-logo-svg.png"></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login:<NavLink to={"/login"}>Login</NavLink>}
                
            </div>
        </header>
    );
}

export default Header;