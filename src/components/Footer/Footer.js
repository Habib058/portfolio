import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Habib</h1>
                    <p>Web Developer | App Developer</p>
                </FooterDesc>
                <FooterLInkItems>
                    <FooterLinkTitle>Contact me</FooterLinkTitle>
                    <FooterLink to="">contact</FooterLink>
                    <FooterLink to="">contact</FooterLink>
                </FooterLInkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLInkItems>
                    <FooterLinkTitle>Projects</FooterLinkTitle>
                    <FooterLink to="">contact</FooterLink>
                    <FooterLink to="">contact</FooterLink>
                </FooterLInkItems>
                <FooterLInkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="">contact</FooterLink>
                    <FooterLink to="">contact</FooterLink>
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
    margin-bottom: 1rem;
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
const FooterLinkTitle = styled.h2`
font-size: 14px;
margin-bottom: 16px;
`
const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0%.5rem;
font-size: 14px;
color: white;

&:hover {
    color: #f26a2e;
    transition: 0.3s ease-out ;
}
`
