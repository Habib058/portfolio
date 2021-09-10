import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ({toggle}) => {
    return (
        <Nav>
        <NavLink className="logo" to='/'><h3 className='px-5'>HABIB</h3></NavLink>
        <MobileIcon onClick={toggle}>
        <Bars/>
        </MobileIcon>
        <NavMenu>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/destination'>Skills</NavLink>
            <NavLink to='/tours'>Projects</NavLink>
            <NavLink to='/tours'>Contacts</NavLink>
            
        </NavMenu>
        {/* <NavBtn className='px-5'>{
                <NavLink> Contact</NavLink>
            }</NavBtn> */}
        
    </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
background: transparent;
/* background-color: #0b1d36; */
height: 80px;
display: flex;
justify-content: space-evenly;
padding: 0.5rem;
z-index: 100;
position: relative;
`

const NavLink= styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-size: 20px;
cursor: pointer;
margin-right: 5rem;
:hover{
    color: wheat;
}


`

const MobileIcon = styled.div`
display: block;
`
const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width:768px){
    display: none;
}

`

const NavBtn = styled.div`
display: flex;
align-items: center;

@media screen and (max-width:768px){
    display: none;
}
`