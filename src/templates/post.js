import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../components/Layout';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h1`
  font-family: "Roboto Slab";
  font-weight: 600;
`;

const BodyStyleWrapper = styled.div`
  h1, h2, h3, h4 {
    font-family: "Roboto Slab";
  }
  a {
    color: royalblue;
  }
`;

const BackButton = styled(Link)`
margin-bottom: 1rem;
text-decoration: underline;
`;

const Footer = styled.p`
font-size: .9em;
color: #AAAAAA;
`;


export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  const backPath = frontmatter.type === 'post' ? '/journal' : '/projects';
  const backTitle = frontmatter.type === 'post' ? 'journal/' : 'projects/';
  return (
    <Layout pageMeta={{title: frontmatter.title, description: frontmatter.description}}>
      <HeaderContainer>
        <BackButton to={backPath}><em>{backTitle}</em></BackButton>
        <PostTitle>{frontmatter.title}</PostTitle>
      </HeaderContainer>
      <BodyStyleWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </BodyStyleWrapper>
      <Footer><em>posted on the {frontmatter.date}</em></Footer>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "Do of MMMM, YYYY")
        type
        description
      }
    }
  }
`;
