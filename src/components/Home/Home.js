import React, { useState } from 'react';
import Header from '../Header/Header';
import MenuButton from '../Navbar/MenuButton/MenuButton';
import Navbar from '../Navbar/Navbar';
import Info from './Info';
import Project from './Project/Project';
import Skills from './Skills/Skills';

const Home = () => {

    return (
        <div>    
           <Header/> 
           <Info/>
           <Skills/>
           <Project/>
        </div>
    );
};

export default Home;