import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Button variant="raised" color="primary">
                    Click Me!
                </Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
