import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Conditions from './components/conditions';


class App extends Component {
    state = {
            resorts : ['Okemo', 'Snow', 'Hunter', 'Sunapee', 'Stowe'],
            resort : 'Okemo'
        };


    render() { 
        return (
            <div className='main__wrap'>
                <Navbar />
                <div className='conditions__box'>
                    <h2>Current Conditions</h2>
                    <Conditions resort = {this.state.resort} />
                </div>
            </div>
            
        );
    };
}
 
export default App;

