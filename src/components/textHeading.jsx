import React from 'react'
import styled from 'styled-components'

function TextHeading({ text }) {
  return (
    <Text>
        {text}
    </Text>
  )
}

export default TextHeading

const Text = styled.h3`
    color: #52585D;
    font-size: 28px;
`