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
  padding: 0 .4em;
  margin: 0 .4em;
  cursor: pointer;
  text-decoration: none;
  color: #555555;
}

a:hover {
  color: #111111;
}
`

const SubheaderContainer = styled.div`
display: flex;
flex-direction: column;
a {
  padding: 0 .4em;
  margin: 0 .4em;
  cursor: pointer;
  text-decoration: none;
  color: #111111;
}
p {
  text-align: center;
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
    <SEO title='About'/>
    <HeaderTitle><Link to={'/'}>{title}</Link></HeaderTitle>
    <SubheaderContainer>
      <p>Ivan Chuang.</p>
      <p>🇸🇬</p>
      <p>Master's Candidate; Urban Science, Planning & Policy @ SUTD.</p>
      <p>Thinking about the data/tech-mediated city.</p>
    </SubheaderContainer>
  </Layout>
  );
};