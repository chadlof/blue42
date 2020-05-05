import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { GlobalStyles } from './global';
import { Burger } from './atoms/Burger'
import { Drawer } from './molecules/Drawer'
import { Menu } from './atoms/Menu'

const AppWrapper = styled.div `
  max-width: 2000px;
`
const StyledHeader = styled.header `
  display:flex;
  width: 100%;
  
`
const HeaderMenu = styled(Menu) `
  flex-flow:row;
  justify-content:space-between;

  a {
    padding: 0 2rem;

  }
`
  
const StyledFooter = styled.footer `
  display:flex;
  `

const FooterMenu = styled(Menu) `
    flex-flow:row;

  font-size:.5em;

`

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const isMobile = window.innerWidth < 480;
 
  return (
   <AppWrapper>
     <GlobalStyles/>
     {
       isMobile &&
       <span>
         <Burger openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
         <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
       </span>
     }
     {
       !isMobile &&
       <span>
         <StyledHeader>
           <HeaderMenu/>
         </StyledHeader>
       </span>
     }
     <body>
      
     </body>
      <StyledFooter>
        <FooterMenu/>
      </StyledFooter>
   </AppWrapper>
  )
}

export default App;
