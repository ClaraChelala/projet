import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiAlignRight, FiXCircle } from "react-icons/fi";


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(() => {
        let check = localStorage.getItem("isAdmin");
        if (check === "true") {
            setisAdmin(true);
        } else {
            setisAdmin(false);
        }
    }, [])
    
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = '/signin';
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }

    return (
        <header className="header__middle">
            <div className="container2">
                <div className="row">

                    <div className="header__middle__menus">
                        <nav className="main-nav" >

                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>

                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >
                                    <FiXCircle />
                                </span>
                            </> : <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >
                                    <FiAlignRight />
                                    <span className="menu-header">IECD</span>
                                </span>
                            </>}

                  
                            {isAdmin ? (
                                <ul className={boxClass.join(' ')}>
                                    <li className="menu-item" >
                                        <NavLink exact activeclassname='is-active' onClick={toggleClass} to={"/AdminTopics"}> Topics </NavLink>
                                    </li>
                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeclassname='is-active' to={"/Posts"}> My Posts </NavLink> </li>
                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeclassname='is-active' to={"/Users"}> Manage Users </NavLink> </li>
                                    <li className="menu-item " ><NavLink onClick={handleLogout} activeclassname='is-active' to={"/"}> Logout </NavLink> </li>

                                </ul>

                            ) : (
                                <ul className={boxClass.join(' ')}>
                                    <li className="menu-item" >
                                        <NavLink exact activeclassname='is-active' onClick={toggleClass} to={"/UserTopics"}> Topics </NavLink>
                                    </li>
                                    <li className="menu-item" ><NavLink onClick={toggleClass} activeclassname='is-active' to={"/UserPosts"}> My Posts </NavLink> </li>
                                    <li className="menu-item" ><NavLink onClick={handleLogout} activeclassname='is-active' to={"/"}> Logout </NavLink> </li>

                                </ul>
                            )
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbarmenu