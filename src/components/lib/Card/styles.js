import styled from 'styled-components'

export const StyledProjectCard = styled.div`
  position: relative;
  flex: 1 0 22rem;
  color: #fff;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`
