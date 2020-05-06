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
  background:  #002f6c;
  padding:8px;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.openDrawer ? null :'translateX(-100%)'};
`



const LogoWrapper = styled.div`
  margin: 20px;
`

export const Drawer = (props) => {
    const { openDrawer, setPageState, setOpenDrawer }= props
    return(
      <DrawerWrapper openDrawer={openDrawer}>
          <LogoWrapper>
            <img src={logo} height='80' alt='logo'/>
          </LogoWrapper>
          <Menu setPageState={setPageState} setOpenDrawer={setOpenDrawer}/>
      </DrawerWrapper>
    )
}