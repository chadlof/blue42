import React, { useState } from 'react';
import { GlobalStyles } from './global';
import { Burger } from './atoms/Burger'
import { Menu } from './atoms/Menu'



function App() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
   <div>
     <GlobalStyles/>
     <Burger openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
     <Menu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>

   </div>
  )
}

export default App;
