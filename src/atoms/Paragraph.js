import React from 'react';
import styled from 'styled-components/macro';


const ParagraphWrapper = styled.div`
  display:flex;
  font-size:12px;
  margin: 2% 10%;
  `





export const Paragraph = (props) => {
    return(
     <ParagraphWrapper>
         {props.children}
     </ParagraphWrapper>
    )
}