import styled from 'styled-components'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding-top: 0;
  transition: all 0.25s ease-in;
  width: 100%;
  z-index: 1001;
  &.scrolled {
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.effects.shadow};
  }
  ${props => props.theme.mediaQuery.tablet`
    margin: 0;
  `};
  & .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${props => props.theme.breakpoints.desktop}px;
    & a {
      font-size: 2rem;
      font-weight: 800;
      padding-left: 1.25rem;
      & span {
        font-weight: 300;
      }
    }
  }
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & i {
    cursor: pointer;
  }
`

const StyledNavItem = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.colors.text.heading};
  letter-spacing: 1px;
  padding: 1rem;
  cursor: pointer;
  white-space: nowrap;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.text.heading};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.15s ease-in-out 0s;
    transition: all 0.15s ease-in-out 0s;
  }
  &:hover:before,
  &:focus:before {
    visibility: visible;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.black};
  }
`

const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  transition: all 0.35s ease-in-out;
  & li {
    & a {
      padding: 10px;
      font-weight: bold;
    }
  }
`

const StyledDrawer = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  z-index: 99999;
  box-shadow: ${props => props.theme.effects.shadow};
  position: fixed;
  right: 0;
  bottom: 0;
  transition: transform 0.25s ease-in-out;
  transform: ${props =>
    props.menuOpen ? 'translateX(0px)' : 'translateX(1200px)'};
  ${props => props.theme.mediaQuery.phone`
        width: 85%;
    `}
`

const StyledDrawerBackground = styled.div`
  position: absolute;
  min-width: 0;
  width: 100%;
  height: 75vh;
`

const StyledDrawerList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  align-items: center;
`

const StyledDrawerItem = styled.li`
  list-style: none;
  font-size: calc(2em + 4vw);
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  line-height: 2em;
`

export {
  StyledHeader,
  StyledNav,
  StyledNavItem,
  StyledNavList,
  StyledDrawer,
  StyledDrawerBackground,
  StyledDrawerList,
  StyledDrawerItem,
}
