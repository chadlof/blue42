import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { GlobalStyles } from './global';
import { Burger } from './atoms/Burger'
import { Drawer } from './molecules/Drawer'
import { Menu } from './atoms/Menu'
import { AboutPage } from './organisms/AboutPage'
import { ContactPage } from './organisms/ContactPage'
import { ServicesPage } from './organisms/Services'

const AppWrapper = styled.div `

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
  const [pageState, setPageState] = useState('about')
  const isMobile = window.innerWidth < 480;
 
  return (
   <AppWrapper>
     <GlobalStyles/>
     {
       isMobile &&
       <span>
         <Burger openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
         <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} setPageState={setPageState }/>
       </span>
     }
     {
       !isMobile &&
       <span>
         <StyledHeader>
           <HeaderMenu setOpenDrawer={setOpenDrawer} setPageState={setPageState}/>
         </StyledHeader>
       </span>
     }
     <body>
       {
         pageState === 'about' &&
        <AboutPage/>
       }
      {
        pageState === 'contact' &&
        <ContactPage/>
      }
      {
         pageState === 'services' &&
         <ServicesPage/>
       }
       {/* <Pages pageState={pageState}/> */}
     </body>
      <StyledFooter>
        <FooterMenu setOpenDrawer={setOpenDrawer} setPageState={setPageState}/>
      </StyledFooter>
   </AppWrapper>
  )
}

export default App;
