import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const Services = props => {
    const servicesList = props.data.allMarkdownRemark.edges;
    return (
        <React.Fragment>
            {servicesList.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
    )
}

export default props => (
    <StaticQuery
        query = {graphql`
        query ServicesQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
              edges {
                node {
                  excerpt
                  frontmatter {
                    title
                    path
                  }
                }
              }
            }
          }          
        `}
          render={data => <Services data={data} />}
    />
)