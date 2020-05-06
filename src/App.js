import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Burger } from './atoms/Burger'
import { Drawer } from './molecules/Drawer'
import logo from './static/logo.svg';
import { Menu } from './atoms/Menu'
import { AboutPage } from './organisms/AboutPage'
import { ContactPage } from './organisms/ContactPage'
import { InstagramPage } from './organisms/Instagram'
import { ServicesPage } from './organisms/Services'
import bestBuyLogo from './static/bestBuyLogo.svg'
import clamLogo from './static/clamLogo.png'
import walmartLogo from './static/walmartLogo.png'
import fleetFarmLogo from './static/fleetFarmLogo.png'


const AppWrapper = styled.div `
  display:flex;
  flex-flow:column;
  justify-content: center;
  align-items: center;
  background: #EFF1E5;
  color: #002F6C;
  font-family: Montserrat;
  text-rendering: optimizeLegibility;
   
`

const LogoWrapper = styled.div`
  margin: 20px;
  flex-grow:1;
`

const StyledHeader = styled.header `
  display:flex;
  justify-content: flex-start;
  width: 100%;
  background:  #002f6c;
  color:#F0AD4E;

  span {
    text-align:center
  }
  
`

const HeaderMenu = styled(Menu) `
  flex-flow:row;
  flex-grow:2;
  justify-content:end;
  
  span {
    font-size: 1rem;
    padding: 0 2rem;

  }
`
  
const StyledFooter = styled.footer `
  display:flex;
  flex-flow:column;
  justify-content:center;
  background:  #002f6c;
  color:#F0AD4E;
  width:100%;
  `

const FooterMenu = styled(Menu) `
  flex-flow:row;
  font-size:.2rem;
  flex-wrap: wrap;

  span {
    padding: .5rem;

  }

`

const PrevClientWrapper = styled.div `
  display:flex;
  justify-content :center;
  align-items:center;
  flex-flow:column;
`

const PrevClientText = styled.div `
  justify-content:center;
  margin:20px;
`
const PrevClientLogoWrapper = styled.div `
  display:flex;
  justify-content:space-between;

  img {
    padding: 0 6px;
  }
`

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [pageState, setPageState] = useState('about')
  const isMobile = window.innerWidth < 600;

 
  return (
    <AppWrapper>
     {
       isMobile &&
       <span>
         <Burger openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
         <Drawer openDrawer={!openDrawer} setOpenDrawer={setOpenDrawer} setPageState={setPageState }/>
       </span>
     }
     {
       !isMobile &&
       <span>
         <StyledHeader>
         <LogoWrapper>
            <img src={logo} height='80' alt='logo'/>
          </LogoWrapper>
           <HeaderMenu setOpenDrawer={setOpenDrawer} setPageState={setPageState}/>
         </StyledHeader>
       </span>
     }
     <div>
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
        {
         pageState === 'instagram' &&
         <InstagramPage/>
       }
     </div>
      <StyledFooter>
        <PrevClientWrapper>
        <PrevClientText>Previous clients that EMD has worked with</PrevClientText>
 <PrevClientLogoWrapper>
        <img src={bestBuyLogo} alt='best buy logo' height='20' />
        <img src={clamLogo} alt='best buy logo' height='20' />
        <img src={walmartLogo} alt='best buy logo' height='20' />
        <img src={fleetFarmLogo} alt='best buy logo' height='20' />


 </PrevClientLogoWrapper>
        </PrevClientWrapper>
        <FooterMenu setOpenDrawer={setOpenDrawer} setPageState={setPageState}/>
      </StyledFooter>
   </AppWrapper>
  )
}

export default App;
