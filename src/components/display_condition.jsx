import React from 'react';
import Pie from 'pie';

class displayCondition extends Component {
    state = { 
        pie: {
            num: 34,
            den: 67,
            color:'blue',
            terrain:'False',
        }
     } 
    render() { 
        return (
            <div>
                <p>Lift</p>
                <Pie num={this.state.num}/>
            </div>
        );
    }
}
 
export default displayCondition;