import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
    
    render() {
        return (
            <div className="restaurants">
                <div className="businessList">
                    {
                        this.props.businesses.map((business) => {
                            return <Business key={business.id} business={business}/>;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BusinessList;