import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 400px;
  margin: 7vh 1rem;
  position: relative;
`

export const StyledSectionChildren = styled.div`
  display: flex;
  justify-content: ${props =>
    (props.position === 'right' && 'flex-end') ||
    (props.position === 'left' && 'flex-start') ||
    (props.position === 'center' && 'center')};
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 600px;
  ${props => props.theme.mediaQuery.tablet`
    justify-content: center;
  `};
`
