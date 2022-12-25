import React, { Component } from 'react';
import Pie from './pie';
import "../styles/conditions.css"


class Conditions extends Component {
    render() { 
        const {resort} = this.props;

        return (
        <div className='conditions'>
            <div className='Lift'>
                <text className='condition-label'> Lifts Open </text>
                <Pie num={6} color="#2DD19F" den={12} terrain={false}/>
            </div>
            <div className='Trails'>
                <text className='condition-label'> Trails Open </text>
                <Pie num={65} color="#2DD19F" den={137} terrain={false}/>
            </div>
            <div className='Terrain'>
                <text className='condition-label'> Terrain Open </text>
                <Pie num={65} color="#2DD19F" den={137} terrain='True'/>
            </div>
        </div>
        );
    }
}
 
export default Conditions;