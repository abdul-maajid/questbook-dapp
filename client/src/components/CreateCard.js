import { Icon, withStyles } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        maxWidth: '200px',
        minWidth: '180px',
        minHeight: '240px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5em',
        margin: '0.5em',  
        flex: 1,
    },
})

class CreateCard extends Component {
    render() {
        const {classes, history} = this.props;
        return (
            <Card className={classes.root}>
                <ButtonBase
                    onClick={() => history.push({pathname: "/newProblem"})}
                    style={{
                        flex: 1,
                    }}
                >
                    <Icon>add_circle</Icon>
                </ButtonBase>
            </Card>
        );
    }
}

export default withStyles(styles)(withRouter(CreateCard));