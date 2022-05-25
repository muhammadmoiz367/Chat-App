import React from 'react'
import styled from 'styled-components'

function TextField({ type, placeholder, error, ...props }) {
  return (
    <>
        <TextInput type={type} placeholder={placeholder} {...props} />
    </>
  )
}

export default TextField

const TextInput = styled.input`
    width: 30%;
    height: 40px;
    background-color: #FDFDFD;
    font-size: 14px;
    border-radius: 20px;
    outline: none;
    color: #96A9BA;
    border: 1px solid rgba(150, 169, 186, 0.7);
    padding-inline: 15px;
    margin-block: 12px;
    ::placeholder{
        color: #96A9BA;
    }
`