import React from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        maxWidth: '200px',
        minWidth: '200px',
        minHeight: '240px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5em',
        margin: '0.5em',  
        flex: 1,    
    },
    divider: {
        background: '#dcdcdc',
        width: '100%',
        height: '1px',
        margin: '0.5em 0',
    },
    copyButton: {
        padding: "0px 6px",
        minWidth: 0,
        fontSize: "0.75em",
        textTransform: "none",
        lineHeight: 0,
    }
})

class ProblemCard extends Component {
    render() {
        const {title, price, address, classes, history, id} = this.props;
        return (
            <Card className={classes.root}>
                    <ButtonBase style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                        onClick={() => history.push({pathname: `/problems/${id}`})}
                        >
                        <div>
                            {title}
                        </div>
                        <div style={{
                                position: 'absolute',
                                right: '-0.65em',
                                top: '-0.65em',
                                background: '#4a646c',
                                color: 'white',
                                padding: '0.25em 0.75em',
                                zIndex: 10,
                            }}>
                                {price} Eth
                            </div>
                    </ButtonBase>
                    <div className={classes.divider} />
                    <div style={{
                        display: 'flex',
                        margin: '0.5em 0',
                        fontSize: '0.75em',
                    }}>
                        <div style={{
                            flex: 1,
                            textAlign: 'left',
                            maxLines: '1',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                            Posted by:{"\u00a0\u00a0"}
                            {address}
                        </div>
                        <Button onClick={() => {navigator.clipboard.writeText(address)}} size='small' className={classes.copyButton}>
                            Copy
                        </Button>
                    </div>
                
            </Card>
        )
    }
}

export default withStyles(styles)(withRouter(ProblemCard));