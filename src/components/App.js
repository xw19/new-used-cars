import React, {Component} from 'react';
import NUCNavbar from './NUCNavbar'
import Main from './Main'

class App extends Component {

    render() {
        return (
            <div className="App">
                <NUCNavbar />
                <Main />
            </div>
        );
    }
}

export default App;
