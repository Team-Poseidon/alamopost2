import React from 'react';


const HeroImage = props => (
    <React.Fragment>
        <div className="pa1 tc">
            <img src={props.source} className="w-100 dib measure f3" alt={props.altName} />
        </div>
    </React.Fragment>
)

export default HeroImage;