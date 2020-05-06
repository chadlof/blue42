import React from 'react';
import styled from 'styled-components/macro';


const ParagraphWrapper = styled.div`
  display:flex;
  font-size:12px;
  margin: 0 10px;
  `





export const Paragraph = (props) => {
    return(
     <ParagraphWrapper>
         {props.children}
     </ParagraphWrapper>
    )
}