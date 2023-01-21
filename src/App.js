import React, { Component } from 'react';
import Navbar from './components/Navigation/NavBar';
import Conditions from './components/Conditions Display/conditions';


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
                <div className='conditions__graph'>
                    <h2>Conditions this Season</h2>
                    <img src={require("./Images/Graph PlaceHolder.jpeg")} alt={'Graph Placeholder'} width='500'/>
                </div>
            </div>
            
        );
    };
}
 
export default App;

