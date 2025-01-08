import React from 'react';

const navbarDesign: React.CSSProperties = {
    textAlign: 'center', 
};

const Navbar: React.FC = () => (
    <nav style={navbarDesign}>
        <p>This is navbar</p>
    </nav>
);  
export default Navbar;
