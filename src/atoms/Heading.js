import React from 'react';
import styled from 'styled-components/macro';


const HeadingWrapper = styled.div`
  display:flex;
  font-size:18px;
  margin: 2% 10%;

  `





export const Heading = (props) => {
    return(
     <HeadingWrapper>
         {props.children}
     </HeadingWrapper>
    )
}