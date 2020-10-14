import React from 'react';
import './style.css';

class Spinner extends React.Component{
    render(){
        return(
            <div>
                <div className="loader"></div>
            </div>
        );
    }
}

export default Spinner;