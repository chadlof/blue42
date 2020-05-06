import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import { Title } from '../atoms/Title'
import { Heading } from '../atoms/Heading'
import { Paragraph } from '../atoms/Paragraph'

const Wrapper = styled.div`
  display:flex;
  flex-flow:column;

`





export const InstagramPage = (props) => {
    const [data, setData] = useState(null)
const isData = data && data.items !== undefined
    useEffect(() => {
        fetch("https://www.instagram.com/goblue42agency/?__a=1&callback=?",{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            type: 'GET',
            dataType: "jsonp"
        })
          .then(res => res.json())
        //   .then(res => res.parseHTML())
        // .then(res => res.text())   
        // .then(text => console.log(text)) 
          .then(
            (result) => {
              setData({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              setData({
                isLoaded: true,
                error
              });
            }
          )

    })

      console.log({data})
    return(
      <Wrapper >
        <Title>Instagram</Title>   
        <Heading>I'm getting a CORS error when using a content-type header</Heading>  
        <Heading>Without header object the API is returning HTML rather then a JSON object</Heading>  
        <Paragraph>See console.log() in dev tools</Paragraph>
        <Paragraph>{isData}</Paragraph>
     </Wrapper>
    )
}