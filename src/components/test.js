import React, { Component } from 'react';
import './App.css';


export default class Profile extends Component {
    render() {
        const profile = this.props.profile
        return (
            <div>
                <div>Profile</div>
                <table className="App-table">
                    <tr>
                        <th>First Name</th>
                        <td>{profile.firstName}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{profile.lastName}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{profile.phone}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{profile.email}</td>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <td>{profile.bio}</td>
                    </tr>
                </table>
            </div>
        );
    }
}
