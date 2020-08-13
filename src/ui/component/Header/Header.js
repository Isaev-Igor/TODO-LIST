import React from 'react';
import './Header.css';
import Search from "./Search/Search";


function Header() {

    return (
        <div className="header-container">
            <div>
                <span className="logo">To Do List </span>
            </div>
            <div>
                <Search/>
            </div>


        </div>
    );
}


export default Header;