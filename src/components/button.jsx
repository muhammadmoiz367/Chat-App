import React from 'react'
import styled from 'styled-components'

function Button({text, icon, styles}) {
  return (
    <ButtonDiv style={styles}>
        {text}
        {icon && <img src={icon} alt="icon" />}
    </ButtonDiv>
  )
}

export default Button

const ButtonDiv = styled.div`
    margin-top: 10px;
    background-color: #6588DE;
    font-size: 14px;
    color: #FDFDFE;
    height: 40px;
    width: 33%;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    img{
        margin-left: 10px;
    }
    :hover{
        background-color: #5C7EDA;
    }
`