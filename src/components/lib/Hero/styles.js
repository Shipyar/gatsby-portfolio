import styled from 'styled-components'

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: 2rem;
  color: ${props => props.theme.colors.first};
  letter-spacing: 2px;
`

const StyledHeroHeading = styled.h1`
  text-align: left;
  margin: 1rem;
  padding: 0 1rem;
  color: ${props => props.theme.colors.text.heading};
  font-size: 48px;
`

const StyledHeroSubheading = styled.h2`
  text-align: left;
  font-weight: 300;
  margin: 1rem;
  padding: 0 1rem;
  color: ${props => props.theme.colors.text.heading};
`

const StyledHeroChildren = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  ${props => props.theme.mediaQuery.phone`
    grid-template-columns: 1fr;
  `};
`

export {
  StyledHero,
  StyledHeroHeading,
  StyledHeroSubheading,
  StyledHeroChildren,
}
