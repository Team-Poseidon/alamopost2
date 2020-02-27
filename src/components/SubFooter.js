import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                <strong>Phone: </strong>
                {props.data.site.siteMetadata.contact.phone}
              </li>
              <li>
                <strong>Email: </strong>
                <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
                  {props.data.site.siteMetadata.contact.email}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href={props.data.site.siteMetadata.contact.facebook}>
                  <FontAwesomeIcon icon={["fab", "facebook"]} style={{height: "3em"}}  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contact {
              email
              phone
              facebook
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
