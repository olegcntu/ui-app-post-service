import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import cl from './Navbar.module.css'
import logo from './img/img_1.png';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <header>
            <div className={cl.header_top}>
                <button className={cl.container_top}>
                    <a onClick={() => setIsAuth(logout)}
                       className={cl.header_exit}>
                        Exit
                    </a>
                </button>
            </div>
            <div className={cl.header_content}>
                <div className={cl.container_content}>
                    <img src={logo} alt="" style={{width: '100px'}}/>

                    <nav className={cl.menu}>
                        <ul>
                            <li><Link style={{color: 'black'}} to="/about">About </Link></li>
                            <li><Link style={{color: 'black'}} to="/post">Posts </Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;