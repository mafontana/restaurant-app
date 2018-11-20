import React from 'react';
import './BusinessList.css';
import Business from '../Business./Business.js'

class Business extends Component {
    render () {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
          </div>    
        )
    }
}

export default BusinessList