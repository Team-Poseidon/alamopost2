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
              blogposts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogposts/"}}, sort: {order: ASC }) {
                edges {
                  node {
                    html
                    frontmatter {
                      path
                      date(locale: "en-US")
                      category
                      title
                    }
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
        result.data.blogposts.edges.forEach(({ node }) => {
            const component = path.resolve('src/templates/blogpost.js');
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
