import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

export const Navbar = () => {

    const { isAuthorized, login, logout } = useContext(AuthContext);

    const { isLight, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Navbar</h1>
            <br/>
            <button onClick={() => {
                if (isAuthorized)
                {
                     logout();
                }
                else 
                {
                    login("R", "Z");
                }
            }}>
                {isAuthorized ? "Logout" : "Login"}
            </button>

            <button onClick={toggleTheme}>{`Mode : ${isLight ? "Dark" : "Light"}`}</button>
      
        </div>
    )
}