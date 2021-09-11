import React, { useState } from 'react';
import Footer from '../Footer/Footer';
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
           <Footer/>
        </div>
    );
};

export default Home;