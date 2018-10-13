import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom'


const styles = theme => ({
    root: {
        justifyContent: 'center',
        margin: 0,
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});



class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        console.log(`${this.state.username} + ${this.state.password}`)
        this.props._login(this.state.username, this.state.password)
        this.setState({
            redirectTo: '/nav'
        })
    }

    render() {
        const { classes } = this.props;
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }

        return (
            // <Router>
            <div>
                <style>{'body { background-color: skyblue; }'}</style>
                <div>
                    <Grid container spacing={27} className={classes.root}>
                        <Grid item xs={12} className={classes.root} style={{ padding: 0 }}>
                            <h4 style={{ marginBottom: 0 }}>Login</h4>
                        </Grid>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                        <div>
                            <TextField
                                id="outlined-username"
                                label="Username"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('username')}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                            </form>
                    </Grid>
                             
                            <div align="center">
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handleChange('password')}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                           
                            <div align="center" >
                            <button className="btn btn-outline-info mt-1 ml-1">Login</button>
                            </div>
                            
                        
                </div>
            </div>
            // </Router>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login)
