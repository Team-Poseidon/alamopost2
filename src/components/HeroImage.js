import React from 'react';


const HeroImage = props => (
    <React.Fragment>
        <div className="tc">
            <img src={props.source} className={props.className} alt={props.altName} />
        </div>
    </React.Fragment>
)

export default HeroImage;