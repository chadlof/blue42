import React from 'react';
import styled from 'styled-components/macro';

const StyledBurger = styled.button`
  position: absolute;
  top: 2%;
  left: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: #AAA;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ openDrawer }) => openDrawer ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ openDrawer }) => openDrawer ? '0' : '1'};
      transform: ${({ openDrawer }) => openDrawer ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ openDrawer }) => openDrawer ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const  Burger = (props) => {
    const { openDrawer, setOpenDrawer}= props
    return (
        <StyledBurger openDrawer={openDrawer} onClick={() => setOpenDrawer(!openDrawer)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      )
}
