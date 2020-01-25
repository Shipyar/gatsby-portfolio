import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${props => props.theme.mediaQuery.tablet`
    width: 800px;
  `}
`

export const StyledSectionChildren = styled.div`
  width: 100%;
`
