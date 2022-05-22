import React from 'react'
import styledComponents from 'styled-components'

function Banner(props) {
  return (
    <BannerDiv>
        <h1>{props.text}</h1>
    </BannerDiv>
  )
}

export default Banner

const BannerDiv = styledComponents.div`
    background-color: #E3F6FC;
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #52585D;
        font-size: 40px;
        font-weight: 600;
    }
`