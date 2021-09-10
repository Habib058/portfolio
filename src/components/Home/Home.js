import React, { useState } from 'react';
import Header from '../Header/Header';
import MenuButton from '../Navbar/MenuButton/MenuButton';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
           <Navbar toggle={toggle}/>
           <Header/> 
           <MenuButton isOpen={isOpen} toggle={toggle}/>
        </div>
    );
};

export default Home;