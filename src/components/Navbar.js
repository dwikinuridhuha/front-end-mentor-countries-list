import React, {useState} from 'react'
import {BiMoon, BiSun} from 'react-icons/bi';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [mode, setMode] = useState(false);
    const styleNav = {
        display: 'flex',
        justifyContent: 'space-between'
    };

    const iconMode = {
        paddingRight: '8px',
        fontSize: '25px'
    };

    const handleMode = (e) => {
        const body = document.getElementById('body');
        // const modeCountry = document.getElementById('countries');
        body.classList.toggle('dark');
        // console.log(modeCountry);
        // modeCountry.classList.toggle('dark');

        setMode(!mode);
    };
    return (
        <nav className="nav" style={styleNav}>
            <Link className="where" to="/">What in the world?</Link>
            {mode ?
                <button className="btn-mode" onClick={handleMode}>
                    <BiSun style={iconMode}/>
                    <span>LightMode</span>
                </button>
                :
                <button className="btn-mode" onClick={handleMode}>
                    <BiMoon style={iconMode}/>
                    <span>DarkMode</span>
                </button>
            }

        </nav>
    )
};

export default Navbar;