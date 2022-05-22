import React from 'react'
import styled from 'styled-components'

function LoginBox({ children }) {
  return (
    <Box>
        {children}
    </Box>
  )
}

export default LoginBox

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`