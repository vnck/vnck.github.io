import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.div`
h1 {
  font-size: 4rem;
  color: #111111;
}
a {
  cursor: pointer;
  text-decoration: none;
  text-decoration-line: none;
}
h1:hover {
  color: #555555;
}
`

export const Header = ({siteTitle}) => (
  <HeaderContainer>
    <Link to="/"><h1>{siteTitle}</h1></Link>
  </HeaderContainer>
)