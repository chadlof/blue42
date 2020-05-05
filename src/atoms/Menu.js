import React from 'react';
import styled from 'styled-components/macro';
import logo from '../static/logo.svg';


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



export const Menu = (props) => {
    const {  setOpenDrawer, className }= props

    return(
        <StyledMenu className={className}>
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
    )
}