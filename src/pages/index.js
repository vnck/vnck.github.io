import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import styled from 'styled-components';

const Layout = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const HeaderTitle = styled.h1`
font-size: 4rem;
`

export default () => {
  const { title, description } = useSiteMetadata();
  return (
  <Layout>
    <HeaderTitle>{title}</HeaderTitle>
    <p><em>{description}</em></p>
  </Layout>
  );
};