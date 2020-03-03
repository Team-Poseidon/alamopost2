import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Rentals = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyclassName="page-testimonials">
      <SEO title="Testimonials" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Hall Rentals</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {testimonials.map(edge => (
            
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-45-l mw5 center">
                <img 
                  src={edge.node.frontmatter.image}
                  className="db w-100 br2 br--top"
                  alt="Photo of a kitten looking menacing."
                />
                <div className="pa2 ph3-ns pb3-ns">
                  <div className="dt w-100 mt1">
                    <div className="dtc">
                      <h1 className="f5 f4-ns mv0">{edge.node.frontmatter.title}</h1>
                    </div>
                    <div className="dtc tr">
                      <h2 className="f5 mv0">Call for Prices</h2>
                    </div>
                  </div>
                  <p className="f6 lh-copy measure mt2 mid-gray">
                    If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                    and touch water with paw then recoil in horror.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query TestimonialsQuery {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/rentals/" } }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        html
        frontmatter {
          path
          title
          image
          capacity
        }
      }
    }
  }
}
`;

export default Rentals;
