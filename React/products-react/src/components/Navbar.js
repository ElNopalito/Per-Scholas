import React from 'react';


const Navbar = () => {
    return (
        <nav style = {styles.navStyle}>
            <h1>Products App</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                </ul>
            </div>
        </nav>
    )
}
//!--------------------------------------------------CSS--------------------------------------------------------------------------------------
//! For our CSS, we are creating an new object and giving it CSS values. Ask about line 5 later. For the CSS, it has to be camelCased and in ''
const styles = {
        navStyle: {
            display: 'flex',
            justifyContent: 'space-around',
            border: 'solid red 2px'
    }
}

export default Navbar