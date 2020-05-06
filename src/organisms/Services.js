import React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../atoms/Title'
import { Heading } from '../atoms/Heading'
import { Paragraph } from '../atoms/Paragraph'

const Wrapper = styled.div`
  display:flex;
  flex-flow:column;
`





export const ServicesPage = (props) => {

    return(
      <Wrapper >
          <Title>Services</Title>
          <Heading>- SEO -</Heading>
          <Heading>- Website -</Heading>
          <Heading>- Ecommerce	 -</Heading>
          <Heading>- Graphic Design -</Heading>
          <Heading>- Email Marking -</Heading>
          <Heading>- Photography -</Heading>
          <Heading>- Videography -</Heading>
      </Wrapper>
    )
}