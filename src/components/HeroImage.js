import React from 'react';
import banner from '../../static/images/legion_family_emblem.jpg';

const HeroImage = props => (
    <React.Fragment>
        <div className="pa1 tc">
            <img src={banner} className="w-100 dib measure f3" alt="Photo of outer space" />
        </div>
    </React.Fragment>
)

export default HeroImage;