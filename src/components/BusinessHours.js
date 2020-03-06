import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const BusinessHours = (props) => {
    const { hoursOfOperation } = props.data.site.siteMetadata;

    return (
        <table className="table table-sm opening-hours-table">
            <tbody>
                {hoursOfOperation.map(ops => (
                    <tr>
                        <td className="day b">{ops.day}</td> 
                        <td className="opens">{ops.opensAt}</td> 
                        <td>-</td>
                        <React.Fragment>
                            {ops.isHoliday === true && <td className="closes">Closed in Observance of Holiday</td> }
                            {ops.isHoliday === false && <td className="closes">{ops.closesAt}</td> }
                        </React.Fragment>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
        query PostInformation{
            site{
              siteMetadata {
                hoursOfOperation{
                  day
                  opensAt
                  closesAt
                  isHoliday
                }
              }
            }
          }
    `}
        render={data => <BusinessHours data={data} />}
    />
)