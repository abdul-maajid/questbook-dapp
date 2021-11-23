import { Icon, withStyles } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5em',
        margin: '0.5em',  
        flex: 1,
    },
    divider: {
        background: '#dcdcdc',
        width: '100%',
        height: '1px',
        margin: '1.5em 0',
    },
    postButton: {
        textTransform: "none",
    }
})

class NewProblemCard extends Component {
    state = {
        title: '',
        description: '',
        price: '',
    }
    render() {
        const {classes, postProblem} = this.props;
        const {title, description, price} = this.state;
        return (
            <Card className={classes.root}>
                <TextField id="outlined-basic" label="Title" variant="outlined" 
                    onChange={event => {
                        this.setState({ title: event.target.value });
                    }}
                />
                <TextField 
                    style={{marginTop: '0.5em'}}
                    multiline
                    rows={8}
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    onChange={event => {
                        this.setState({ description: event.target.value });
                    }}
                />
                <div className={classes.divider} />
                <div style={{
                        display: 'flex',
                        margin: '0.5em 0',
                        alignItems: 'center'
                    }}>
                        Ether:{"\u00a0\u00a0"}
                        <TextField
                            onChange={event => {
                                this.setState({ price: event.target.value });
                                console.log(event.target.value)
                            }}
                            type='number' style={{marginRight: 'auto'}} size='small' id="outlined-basic" label="" variant="outlined" />
                        <Button
                            onClick={() => postProblem(title, description, `${price}`)}
                            variant='contained' color='primary' size='small' className={classes.postButton}>
                            Post
                        </Button>
                    </div>
            </Card>
        );
    }
}

export default withStyles(styles)(withRouter(NewProblemCard));