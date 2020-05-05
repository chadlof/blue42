import React from 'react';
import styled from 'styled-components/macro';
import logo from '../static/logo.svg';
import { Menu } from '../atoms/Menu'

const DrawerWrapper = styled.div`
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



const LogoWrapper = styled.div`
  float: right;
  margin: 20px;
`

export const Drawer = (props) => {
    const { openDrawer }= props

    return(
      <DrawerWrapper openDrawer={openDrawer}>
          <LogoWrapper>
            <img src={logo} height='80' alt='logo'/>
          </LogoWrapper>
          <Menu/>
      </DrawerWrapper>
    )
}