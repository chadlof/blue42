import React , { useState }from 'react';
import styled from 'styled-components/macro';
import { Title } from '../atoms/Title'
import { Heading } from '../atoms/Heading'
import { Paragraph } from '../atoms/Paragraph'


const Wrapper = styled.div`
  display:flex;
  flex-flow:column;
`

const StyledForm = styled.form `
  display:flex;
  flex-flow:column;
`
const StyledLabel = styled.label `
  margin:2px;
`

const StyledInput = styled.input `
    border-radius:6px;`

const StyledTextArea = styled.textarea `
    border-radius:6px;
`

const StyledSubmit = styled.input `
    border-radius:6px;
    width: 60%;
    margin: 12px auto;
`





export const ContactPage = (props) => {
    const [name, setName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [message, setMessage] = useState(' ')

console.log({name, email,message})
    const _onNameChange = (event) => {
        setName(event.target.value)
    }

    const _onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const _onMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const _onSubmit = () => {
        console.log('Save form data: ', name, email,message)
    }

    return(
      <Wrapper >
          <Title>Contact us</Title>
      <StyledForm onSubmit={_onSubmit}>
        <StyledLabel>
          Name:
        </StyledLabel>
          <StyledInput type="text" value={name} onChange={_onNameChange} />
        <StyledLabel>
          Email:
        </StyledLabel>
          <StyledInput type="text" value={email} onChange={_onEmailChange} />
        <StyledLabel>
          Message:
        </StyledLabel>
          <StyledTextArea type="text" rows="4" value={message} onChange={_onMessageChange} />
        <StyledSubmit type="submit" value="Submit" />
      </StyledForm> 
        <Heading>EMD’s general information:</Heading>
        <Paragraph>Phone: 763-123-1234</Paragraph>
        <Paragraph>Email: info@elitemediadesign.com</Paragraph>
        <Paragraph>Address: 80 S 8th St, Suite #005 Minneapolis, MN 55402</Paragraph>
      </Wrapper>
    )
}