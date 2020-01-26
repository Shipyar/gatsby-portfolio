import React from 'react'
import { StyledContainer } from './styles.js'

const Container = ({ children, width }) => (
  <StyledContainer width={width}>{children}</StyledContainer>
)

export default Container
