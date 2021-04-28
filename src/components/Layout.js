import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import SEO from './seo';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 6em 10em;
  margin-right: 20vw;
  a {
    cursor: pointer;
    text-decoration: none;
    color: #555555;
  }

  a:hover {
    color: #111111;
  }

  @media only screen and (max-width: 1000px) {
    padding: 6em 6em;
    margin-right: 0vw;
  }

  @media only screen and (max-width: 600px) {
    padding: 2em 2em;
    margin-right: 0vw;
  }
`

export const Layout = ({pageMeta, children}) => {
  const {title} = useSiteMetadata();
  return (
    <Container>
      <SEO title={pageMeta.title} description={pageMeta.description}/>
      <Header siteTitle={title} />
      {children}
    </Container>
  )
}