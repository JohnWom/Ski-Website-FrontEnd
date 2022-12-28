import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Conditions from './components/conditions';
import Graph from './components/graph';
import { Data } from './components/data';

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
                <div className='graph__box'>
                    <h2>Conditions this year</h2>
                    <Graph chartData={Data}/>
                </div>
            </div>
            
        );
    };
}
 
export default App;

