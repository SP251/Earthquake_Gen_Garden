import React, { Component } from 'react';
import '../App.css';


export default class Profile extends Component {
    render() {
        const profile = this.props.profile
        return (
            <div  className="marginTop20">
                <div className="app-sub-container">Profile</div>

                <div className="profile-container">
                    <div>
                        <img src={profile.avatarImage} className="profileImg" alt="Profile Avatar"/>
                    </div>

                    <div className="profile-sub-container">
                        <div>First Name</div>
                        <div>{profile.firstName}</div>
                    </div>
                    <div className="profile-sub-container">
                        <div>Last Name</div>
                        <div>{profile.lastName}</div>
                    </div>
                    <div className="profile-sub-container">
                        <div>Phone</div>
                        <div>{profile.phone}</div>
                    </div>
                    <div className="profile-sub-container">
                        <div>Email</div>
                        <div>{profile.email}</div>
                    </div>
                    <div className="profile-sub-container">
                        <div className="vertical-align-top">Bio</div>
                        <div>{profile.bio}</div>
                    </div>

                </div>
            </div>
        );
    }
}
