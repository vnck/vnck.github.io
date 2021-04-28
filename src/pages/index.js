import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import styled from 'styled-components';

const Layout = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
`;

const HeaderTitle = styled.h1`
font-size: 4rem;
color: #111111;
a {
  padding: 0 .2em;
  cursor: pointer;
  text-decoration: none;
  color: #111111;
}

a:hover {
  background-color: #b2c5a5;
  border-radius: 6px;
}
`

const SubheaderContainer = styled.div`
display: flex;
a {
  padding: 0 .4em;
  margin: 0 .4em;
  cursor: pointer;
  text-decoration: none;
  color: #111111;
}

a:hover {
  background-color: #b2c5a5;
  border-radius: 6px;
}
`

export default () => {
  const { title } = useSiteMetadata();
  return (
  <Layout>
    <SEO title='vnck | a collection of writings and projects'/>
    <HeaderTitle><Link to={'about'}>{title}</Link></HeaderTitle>
    <SubheaderContainer>
      <Link to={'journal'}>journal</Link>
      <span>/</span>
      <Link to={'projects'}>projects</Link>
    </SubheaderContainer>
  </Layout>
  );
};