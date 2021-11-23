import { Icon, withStyles } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5em',
        margin: '0.5em',  
        flex: 1,
        textAlign: 'left'
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

class ProblemDetailsCard extends Component {
    state = {
        newSolution: '',
    }

    renderSolutions() {
        const {solutions, classes, approveSolution} = this.props;
        return solutions.map(solution => (
            <div style={{
                display: 'flex',
                margin: '0.5em 0',
                alignItems: 'start'
            }}>
                {solution.solverAddress}:{"\u00a0\u00a0"}
                <Typography
                    rows={3} style={{flex: '1', marginRight: '1em'}} size='small' id="outlined-basic" label="" variant="body1">
                    {solution.solutionStatement}
                </Typography>
                <Button
                    disabled={solution.approved}
                    onClick={() => approveSolution(solution.id)}
                    variant='contained' color='primary' size='small' className={classes.postButton}>
                    Approve
                </Button>
            </div>
        ))
    }

    render() {
        const {title, description, price, classes, addSolution} = this.props;
        const {newSolution} = this.state;
        return (
            <Card className={classes.root}>
                <Typography 
                    style={{
                        fontWeight: 'bold'
                    }}
                variant='h4'>{title}</Typography>
                <Typography 
                    style={{
                        marginTop: '1.5em'
                    }}
                variant='body1'>{description}</Typography>
                <div className={classes.divider} />
                <div style={{
                    display: 'flex',
                    margin: '0.5em 0',
                    alignItems: 'start'
                }}>
                    Add an answer:{"\u00a0\u00a0"}
                    <TextField
                        onChange={event => {
                            this.setState({ newSolution: event.target.value });
                        }}
                        multiline
                        rows={3} style={{flex: '1', marginRight: '1em'}} size='small' id="outlined-basic" label="" variant="outlined" />
                    <Button
                        onClick={() => addSolution(newSolution)}
                        variant='contained' color='primary' size='small' className={classes.postButton}>
                        Post
                    </Button>
                </div>

                <div className={classes.divider} />

                {this.renderSolutions()}
            </Card>
        );
    }
}

export default withStyles(styles)(withRouter(ProblemDetailsCard));