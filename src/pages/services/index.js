import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Services from '../../components/Services';

const ServicesPage = (props) => {
 return (
    <Layout bodyClass="page-services">
      <SEO title="Services" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Post Services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          <Services />
        </div>
      </div>
    </Layout>
  );
};


export default ServicesPage;
