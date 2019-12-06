import React from 'react';
import {
    StyledSnippet,
    StyledSnippetContent,
    StyledSnippetHeader,
    StyledSnippetButtons,
    StyledSnippetButton,
    StyledSnippetLine,
    StyledSnippetMenu,
    StyledSnippetMenuItem,
    StyledSnippetCode,
} from './styles';

function Snippet({ lines }, props) {
  const renderLines = () => {
    lines.map((item) => {

    })
  }

  return (
    <StyledSnippet {...props}>
      <StyledSnippetHeader>
        <StyledSnippetButtons>
          <StyledSnippetButton color="#faa1bc" left="13px" />
          <StyledSnippetButton color="#ffeaa7" left="33px" />
          <StyledSnippetButton color="#80dad3" left="53px" />
        </StyledSnippetButtons>
      </StyledSnippetHeader>
      <StyledSnippetContent>
        <StyledSnippetMenu>
          <StyledSnippetMenuItem></StyledSnippetMenuItem>
          <StyledSnippetMenuItem></StyledSnippetMenuItem>
          <StyledSnippetMenuItem></StyledSnippetMenuItem>
        </StyledSnippetMenu>
        <StyledSnippetCode>
          {lines.map((item) => (
            <StyledSnippetLine>
              {item}
            </StyledSnippetLine>
          ))}
        </StyledSnippetCode>
      </StyledSnippetContent>
    </StyledSnippet>
  )
}

export default Snippet;