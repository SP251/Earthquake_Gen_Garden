import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";


export default class Header extends Component {
    render() {
        const site = this.props.headerData
        const profile = this.props.profile
        return (
            <React.Fragment>
                <div>
                    <Link to="/">
                        <img src={site.heroImage} className="App-headerImg" alt="Realtor-logo"/>
                    </Link>
                </div>
                <div>
                    <div className="header-title">{site.title}</div>
                </div>
                <div>
                    <Link to="/profile" className="App-profile">
                        Welcome {profile.firstName}
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
