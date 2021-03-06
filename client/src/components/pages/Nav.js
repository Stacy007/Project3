import { Link } from "react-router-dom";
import React, { Component } from 'react'
import styled from 'react-emotion'
import Header from '../Header/Header';
import NavButton from '../NavButtons/index';
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';

const BtnList = styled('ul')`
    list-style: none;
`

class NavPage extends Component {
    constructor() {
        super()
        this.state = {
            firstName: null
        }

    }

    render() {
        
        // waiting for conditional
        return (
            <div align="center">
                <Header _logout={this.props._logout} />
                <div className="span2" > 
                
                <BtnList > 
                    <Link to='/favorites'>
                    <li className="listitem" ><NavButton label="Favorites" /></li></Link>
                    <br></br>
                    {/* <li className="listitem"><NavButton label="Activities" /> </li> */}
                    {/* <br></br> */}
                    {/* <li className="listitem"><NavButton label="Create List" /> </li> */}
                    {/* <br></br> */}
                    <Link to='/wheel'>
                    <li className="listitem"><NavButton label="Randomizer" /> </li></Link>
                    
                </BtnList>

                </div>
            </div>
        )
    }
}

export default NavPage