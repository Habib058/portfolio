import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import vid from '../../assets/video/video.mp4'
import Typical from 'react-typical';
import './Header.css'

const Header = () => {
    return (
        <HeaderMainContainer>
            <HeaderMainBg>
                <VideoBg src={vid} type='video/mp4' autoPlay loop muted playsInline></VideoBg>
            </HeaderMainBg>
            <HeaderMainContent>
                <TravelMainItems>
                    <HeaderMainH3>Hello,  I am </HeaderMainH3>
                    <HeaderMainH1>Habibur Rahman</HeaderMainH1>
                    <HeaderMainP>
                        <Typical
                            steps={['A Full Stack Developer', 1000,
                                'A Creative Web Designer', 1000,
                                'A Quick Learner', 1000,
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </HeaderMainP>
                    <a href="https://drive.google.com/file/d/1Py_j1XjCh0wrxvGF_2SBCUv6pCcO-n5_/view" target="_blank"
                    ><button className='btn btn-light button'>Download CV</button></a>
                </TravelMainItems>

            </HeaderMainContent>
        </HeaderMainContainer>
    );
};

export default Header;

const HeaderMainContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 1rem;
position: relative;
margin-top: -80px;
color: white;
:before {
    content: '';
    position: absolute;
    top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 2;
background: linear-gradient(
    180deg,
    rgba(0,0,0,0.2) 0%,
    rgba(0, 0, 0, 0.4) 100%
),
linear-gradient(180deg, rgba(0,0,0,0.2) 0%,transparent 100%);

}
`
const HeaderMainBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit:cover;
object-fit: cover;
`

const HeaderMainContent = styled.div`
z-index: 3;
height: calc(100vh - 80px);
max-height:100%;
padding: 0rem calc((100vw - 1300px) / 2);

`
const TravelMainItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
height: 100vh;
max-height: 100%;
padding: 0;
color: #fff;
line-height: 1.1;
font-weight: bold;
`
const HeaderMainH1 = styled.h1`
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1rem;
`
const HeaderMainP = styled.p`
margin-bottom: 2rem;
font-weight: 400;
font-size: 24px;

`

const HeaderMainH3 = styled.h3`
margin-bottom: 2rem;
font-weight: 400;
letter-spacing: 3px;
padding: 0 1rem;
`