import React, { Component } from 'react';
import Navbar from './components/NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resorts : ['Okemo', 'Snow', 'Hunter', 'Sunapee', 'Stowe']
        }
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar />
            </React.Fragment>
        );
    }
}
 
export default App;

