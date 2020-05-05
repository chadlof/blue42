import React from 'react';
import styled from 'styled-components/macro';
import logo from '../static/logo.svg';

const MenuWrapper = styled.div`
  display:flex;
  flex-flow:column;
  justify-content:center;
  height: 100%;
  width:90%;
  position: absolute;
  top: 0;
  left: 0;
  background: #F0AD4E;
  padding:8px;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.openDrawer ? null :'translateX(-100%)'};
`

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height:100%;
  text-align: left;
  padding: 2rem;


  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    font-size:1.5em;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

const LogoWrapper = styled.div`
  float: right;
  margin: 20px;
`

export const Menu = (props) => {
    const { openDrawer, setOpenDrawer }= props

    return(
      <MenuWrapper openDrawer={openDrawer}>
          <LogoWrapper>
            <img src={logo} height='80' alt='logo'/>
          </LogoWrapper>

        <StyledMenu >
        <a href="/">
          <span aria-label="about us" onClick={() => setOpenDrawer(false)}>About us</span>
        
        </a>
        <a href="/">
          <span aria-label="contact us"  onClick={() => setOpenDrawer(false)}>Contact Us</span>
          
          </a>
        <a href="/">
          <span  aria-label="services" onClick={() => setOpenDrawer(false)}>Services</span>
          
          </a>
      </StyledMenu>
      </MenuWrapper>
    )
}