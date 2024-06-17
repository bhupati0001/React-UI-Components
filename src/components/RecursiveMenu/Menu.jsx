import React, { useState } from 'react';
import './Menu.css'

const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
                {item.label}
                {item.children && <span>{isOpen ? " [-]" : " [+]"}</span>}
            </div>
            {isOpen && item.children && (
                <ul>
                    {item.children.map((child, index) => (
                        <MenuItem key={index} item={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const Menu = ({ data }) => {
    return (
        <div className="wrapper">
            <ul>
                {data.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </ul>

        </div>
    );
};


export default Menu;
