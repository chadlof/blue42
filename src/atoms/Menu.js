import React from 'react';
import styled from 'styled-components/macro';


const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height:100%;
  text-align: left;
  padding: 2rem;


  span {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    font-size:1.5em;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: #F0AD4E;
  }
`;




export const Menu = (props) => {
  const {  setOpenDrawer, className, setPageState }= props

    const toggleAboutPage = () => {
      setOpenDrawer(false)
      setPageState('about')
    }
    
    const toggleContactPage = () => {
      setOpenDrawer(false)
      setPageState('contact')
    }

    const toggleServicesPage = () => {    
      setOpenDrawer(false)
      setPageState('services')
    }

    const toggleInstagramPage = () => {    
      setOpenDrawer(false)
      setPageState('instagram')
    }

    return(
        <StyledMenu className={className}>
          <span aria-label="about us" onClick={() => toggleAboutPage()}>About us</span>
        
          <span aria-label="contact us"  onClick={() => toggleContactPage()}>Contact Us</span>
          
          <span  aria-label="services" onClick={() => toggleServicesPage()}>Services</span>
          
          <span  aria-label="instagram" onClick={() => toggleInstagramPage()}>Instagram</span>

      </StyledMenu>
    )
}