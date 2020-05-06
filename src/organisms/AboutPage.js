import React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../atoms/Title'
import { Heading } from '../atoms/Heading'
import { Paragraph } from '../atoms/Paragraph'
import idsImg from '../static/idsImg.jpeg'


const Wrapper = styled.div`
  display:flex;
  flex-flow:column;

  img {
      margin:30px 20px ;
  }
`





export const AboutPage = (props) => {

    return(
      <Wrapper >
          <Title>About Us</Title>
          <Heading>EMD was founded in 2005 in a garage when two college roommates, Henry and John, put their minds together to create all things web related. The office, now located in the IDS Center in downtown Minneapolis, has over 30 employees.</Heading>
          <img src={idsImg} alt='ids center building' height='80' />
          <Heading>EMD’s Mission Statement: </Heading>
          <Paragraph>We strive to deliver value in our service, and to understand with respect all of our clients needs and to provide a partnership that is created when we host our clients web services, develop their site, market their product/service or simply give them advice.</Paragraph>
          <Heading>EMD’s Vision: </Heading>
          <Paragraph>Our vision is to create a business world full of prosperity, meaning, and connection for all.</Paragraph>
      </Wrapper>
    )
}