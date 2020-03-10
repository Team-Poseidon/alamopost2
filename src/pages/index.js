import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import HeroImage from '../components/HeroImage';
import banner from '../images/banners/legion-banner.jpg';
import Services from '../components/Services';

const Home = (props) => {
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="page-home">
          <p className="f2 blue pv2 tc">Alamo Post 2</p>
          <div className="banner">
            <HeroImage source={banner} altName="Legion banner" className="pa2" />
          </div>
          </div>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div className="container pt-8 pt-md-10 ">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 mb-3 tc gold">Alamo Post 2 Services</h2>
          </div>
          <Services data={query} />
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 mb-4 tc gold">Alamo Post 2 Groups</h2>
          </div>

          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
