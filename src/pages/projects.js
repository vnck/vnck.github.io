import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'gatsby';
import styled from 'styled-components';


const PostLinkContainer = styled.div`
display: flex;
margin: 1em 0;
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

const PostLink = ({post}) => (
  <PostLinkContainer>
    <Link to={post.fields.slug}>
      {post.frontmatter.title}
    </Link>
  </PostLinkContainer>
)

const IndexWrapper = styled.div``;

const Projects = ({data}) => {
  const Posts = data.allMdx.nodes.map((node) => <PostLink key={node.id} post={node} />)

  console.log(data.allMdx.nodes);

  return (
    <Layout pageMeta={{title: 'vnck | a collection of writings and projects'}}>
      <p><em>projects</em></p>
      <IndexWrapper>{Posts}</IndexWrapper>
    </Layout>
  );
};

export default Projects

export const pageQuery = graphql`
query {
  allMdx(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
}
`
