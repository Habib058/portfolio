import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import facebook from '../../assets/images/facebook.png'
import lninkedIn from '../../assets/images/linkedin.png'
import git from '../../assets/images/git.jpg'
import gmail from '../../assets/images/gmail.png'
import whatsApp from '../../assets/images/WhatsApp.svg.webp'
import './Footer.css'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Habib</h1>
                    <p>Web Developer | App Developer</p>
                </FooterDesc>
                <FooterLInkItems>
                    <FooterLinkTitle>Skills</FooterLinkTitle>
                    <FooterLink to="">React JS</FooterLink>
                    <FooterLink to="">Node JS</FooterLink>
                    <FooterLink to="">Mongo DB</FooterLink>
                </FooterLInkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLInkItems>
                    <FooterLinkTitle>Projects</FooterLinkTitle>
                    <FooterLink href="https://clone-058.web.app/" target="_blank">Amazon Clone</FooterLink>
                    <FooterLink href="https://travio-058.web.app/" target="_blank">Travio</FooterLink>
                    <FooterLink href="https://food-to-fly-347a7.web.app/" target="_blank">Food-To-Fly</FooterLink>
                </FooterLInkItems>
                <FooterLInkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterIcons>
                        <FooterLink href="https://www.facebook.com/Habib058/" target="_blank"><img className="logo" src={facebook} alt="" /></FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/habib-shakil-a8a703203/" target="_blank"><img className="logo" src={lninkedIn} alt="" /></FooterLink>
                        <FooterLink href="https://github.com/Habib058" target="_blank"><img className="logo" src={git} alt="" /></FooterLink>
                    </FooterIcons>
                    {/* <FooterLink href="https://github.com/Habib058" target="_blank"><img className="logo" src={gmail} alt="" /></FooterLink> */}
                    <p style={{fontSize:"20px"}}><img className="logo" src={gmail} alt="" /> : habibshakil216@gmail.com</p>
                    <p style={{fontSize:"20px"}}><img className="logo" src={whatsApp} alt="" /> : 01743189159</p>
                </FooterLInkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
padding: 5rem calc((100vw - 1100xp) / 2);
display: grid;
grid-template-columns: repeat(2, 1fr);
color: white;
background: black;
`
const FooterDesc = styled.div`
padding: 0 2rem;
h1{
    margin-bottom: 2rem;
    color: #f26a2e;
}
@media screen and (max-width: 400px) {
    padding: 1rem;
}
`
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

@media screen and (max-width: 820px) {
   grid-template-columns: 1fr;
}

`
const FooterLInkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px) {
   padding: 1rem;
}

`
const FooterIcons = styled.div`
display: flex;
flex-direction: row;
`

const FooterLinkTitle = styled.h2`
font-size: 20px;
margin-bottom: 16px;
`
const FooterLink = styled.a`
text-decoration: none;
margin-bottom: 0.5rem;
margin-right: 0.5rem;
font-size: 20px;
color: white;

&:hover {
    color: #f26a2e;
    transition: 0.3s ease-out ;
}
`
