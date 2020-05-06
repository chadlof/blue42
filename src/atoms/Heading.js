import React from 'react';
import styled from 'styled-components/macro';


const HeadingWrapper = styled.div`
  display:flex;
  font-size:18px;
  margin: 12px 10px 6px 10px;

  `





export const Heading = (props) => {
    return(
     <HeadingWrapper>
         {props.children}
     </HeadingWrapper>
    )
}