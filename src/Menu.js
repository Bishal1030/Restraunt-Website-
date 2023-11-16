import React from 'react'
import { MenuList } from './helper/MenuList';
import MenuItem from './components/MenuItem';
import './styles/Menu.css';
import {motion} from 'framer-motion';

function Menu() {
  return (
    <motion.div 
    className="menu"
    intial = {{width: 0}}
    animate = {{width: "100%"}}
    exit = {{x:window.innerWidth, transition: {duration: 0.3}}}
    >
    <h1 className="menuTitle">Our Menu</h1>
    <div className="menuList">
        {MenuList.map((menuItem, key) => {
            return(
            <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name} 
            price={menuItem.price} 
            />
        );
    })}
    </div>
    </motion.div>
  )
}

export default Menu
