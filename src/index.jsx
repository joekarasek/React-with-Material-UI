import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Button variant="raised" color="primary">
                    Click Me!
                </Button>
                <Card>
                    <CardMedia
                        image="http://placekitten.com/g/200/300"
                        title="A cute looking cat"
                    />
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            Beware Cats!
                        </Typography>
                        <Typography component="p">
                            Cats are a widespread species of highly intelligent mammals with mastery of deflective and
                            disarming practices. Their motives are unclear.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
