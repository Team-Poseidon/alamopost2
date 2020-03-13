import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const BlogPosts = (props) => {
  const blogPosts = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-articles">
      <SEO title="News" />   
       
        <section className="mt3 mw7 center avenir">
        <h2 className="baskerville fw1 ph3 ph0-l">Alamo Post 2 News</h2>
            {blogPosts.map( edge => {

                const {title, path, image, author, date } = edge.node.frontmatter;
                const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
                const formatDate = new Date(date).toLocaleDateString("en-US", dateOptions);
                
              return  (
                <article className="bt bb b--black-10" key={path}>
                    <Link className="db pv4 ph3 ph0-l no-underline black" to={path}>
                    <div className="flex flex-row flex-column-sm flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                            <img
                            src={image}
                            className="db"
                            alt={title}
                             />
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                            <h1 className="f3 fw1 baskerville mt0 lh-title">{title}</h1>
                            <p className="f6 f5-l lh-copy" dangerouslySetInnerHTML={{ __html: edge.node.html }} />
                            <p className="f6 lh-copy mv0">By {author}</p>
                            <p className="f6 lh-copy mv0">{formatDate}</p>
                        </div>
                    </div>
                    </Link>
                </article>
            )})}    
        </section>
    </Layout>
  );
};

export const query = graphql`
query articlesQuery {
  allMarkdownRemark(
    filter: { fileAbsolutePath: {regex: "/blogposts/"} },
    sort: { fields: [frontmatter___weight], order: ASC }
  ) {
    edges {
      node {
        html
        frontmatter {
          path
          date
          image
          title
          author
        }
      }
    }
  }
}
`;

export default BlogPosts;
