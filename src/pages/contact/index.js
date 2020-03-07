import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import BusinessHours from '../../components/BusinessHours';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact Alamo Post 2</h1>
            <div className="pa1 pa1-ns">
                <img src="http://tachyons.io/img/space.jpg" className="w-100 f5 measure" alt="Photo of outer space" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8">
          <h4 className="mt-4">Business Hours</h4>
          <BusinessHours />
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
