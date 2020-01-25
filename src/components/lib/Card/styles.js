import styled from 'styled-components'

export const StyledProjectCard = styled.div`
  height: 100%;
  align-items: center;
  display: grid;
  grid-template: auto auto none "thumbnail" "content";
  gap: 1rem;
`

export const StyledPostThumbnail = styled.div`
  grid-area: thumbnail;
`;

export const StyledPostContent = styled.div`
  grid-area: content;
`;

export const StyledPostLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  font-size: 1.8rem;
  text-align: left;
  font-weight: 300;
  color: #535c68;
`;