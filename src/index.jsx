import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class App extends Component {
    render() {
        const classes = {
            card: {
                maxWidth: 345,
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
            },
        };

        return (
            <div>
                <h1>Hello World</h1>
                <Button variant="raised" color="primary">
                    Click Me!
                </Button>
                <Card style={classes.card}>
                    <CardMedia
                        style={classes.media}
                        image="http://placekitten.com/g/400/300"
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
