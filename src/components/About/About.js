import React, { useState } from 'react';
import MenuButton from '../Navbar/MenuButton/MenuButton';
import Navbar from '../Navbar/Navbar';

const About = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar toggle={toggle}/>
           <MenuButton isOpen={isOpen} toggle={toggle}/>
            
        </div>
    );
};

export default About;