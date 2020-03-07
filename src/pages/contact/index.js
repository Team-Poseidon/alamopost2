import React from 'react';
import banner from '../../images/banners/legion_family_emblem.jpg';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import BusinessHours from '../../components/BusinessHours';
import HeroImage from '../../components/HeroImage';

const Contact = props => (
  
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="container">
      <div className="row pv2">
        <div className="col-12">
          <p className="f2 db tc">Contact Alamo Post 2</p>
          <HeroImage source={banner} className="w-100 dib measure f3" altName="legion family banner" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-8 measure db center f5 f4-ns">
          <h4 className="mt-4 tc">Business Hours</h4>
          <BusinessHours />
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
