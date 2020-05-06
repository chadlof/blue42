import React from 'react';
import styled from 'styled-components/macro';


const TitleWrapper = styled.div`
  display:flex;
  justify-content: center;
  margin: 20px auto;
  font-size:28px;
  `





export const Title = (props) => {
    return(
     <TitleWrapper>
         {props.children}
     </TitleWrapper>
    )
}