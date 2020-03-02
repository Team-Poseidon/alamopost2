import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Officers = (props) => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Officers" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Meet The Officers</h1>
              <p>
                Meet the elected officers who guide the post in a positive light.
              </p>
            </div>
          </div>
        </div>

        <div className="container pb6 cards-container">
          {teams.map(edge => (
            <div key={edge.node.frontmatter.path} className="card mw5 center bg-white pa3 pa4-ns mv3">
              <div className="card-two">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <img
                          alt={edge.node.frontmatter.title}
                          className="img-fluid mb-2"
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.officerName}</h2>
                    <ul className="card-meta">
                      <li>
                        <strong>{edge.node.frontmatter.jobtitle}</strong>
                      </li>
                      <li>
                        <a href={edge.node.frontmatter.email}>{edge.node.frontmatter.email}</a>
                      </li>
                      <li>
                        <a target="_blank" href={edge.node.frontmatter.linkedinurl}>
                          {edge.node.frontmatter.linkedinurl}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="team-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
    </Layout>
  );
};

export const query = graphql`
  query teamQueryAndTeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/officers/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            officerName
            path
            image
            jobtitle
            linkedinurl
            email
          }
        }
      }
    }
  }
`;

export default Officers;
