import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SignUpButton from '../SignupButton/index'
import LoginButton from '../LoginButton/index'
import Header from '../Header/Header';

class HomePage extends Component {
    render() {
        return(
        <div align= "center"  >
            <style>{'body { background-color: skyblue; }'}</style>
            <Link to="/login">
                <LoginButton />
            </Link>
            <span> </span>
            <Link to="/signup">
                <SignUpButton />
            </Link>
        </div>
        )
    }
}

export default HomePage;