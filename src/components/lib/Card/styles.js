import styled from 'styled-components'

export const StyledProjectCard = styled.div`
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: none;
  grid-template-areas: "thumbnail content";
  gap: 2rem;
  ${props => props.theme.mediaQuery.tablet`
    grid-template-rows: auto auto;
    grid-template-columns: none;
    grid-template-areas:
        "thumbnail"
        "content";
    gap: 1rem;
  `};
`

export const StyledPostThumbnail = styled.div`
  grid-row-start: thumbnail;
  grid-column-start: thumbnail;
  grid-row-end: thumbnail;
  grid-column-end: thumbnail;
`;

export const StyledPostContent = styled.div`
  grid-row-start: content;
  grid-column-start: content;
  grid-row-end: content;
  grid-column-end: content;
  p {
    font-size: 0.85em;
  }
  h3 {
    padding: 0;
    font-size: 1.8rem;
    color: inherit;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }
`;