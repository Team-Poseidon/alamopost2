const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            services: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
                edges {
                  node {
                    id
                    frontmatter {
                      path
                      title
                      date(formatString: "DD MMMM YYYY")
                    }
                    excerpt
                  }
                }
              }
              officers: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/officers/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
                edges {
                  node {
                    id
                    frontmatter {
                      path
                      title
                      date(formatString: "DD MMMM YYYY")
                    }
                    excerpt
                  }
                }
              }
              rentals: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/rentals/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
                edges {
                  node {
                    id
                    frontmatter {
                      path
                      title
                      date(formatString: "DD MMMM YYYY")
                    }
                    excerpt
                  }
                }
              }
          }
        `,
      ).then((result) => {
        result.data.services.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/service.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.officers.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/officer.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.rentals.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/rental.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};
