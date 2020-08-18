import React, { Component } from 'react';
import '../App.css';

export default class Feature extends Component {
    render() {
        const { featureId } = this.props;
        const features = this.props.featureData.features[featureId - 1].properties;
        return (
            <div className="marginTop20">
                {
                    features &&
                    <React.Fragment>

                        <div className="app-sub-container">
                            {features.title}
                        </div>
                        <div className="feature-container">
                            <div className="feature-sub-container">
                                <div>Place</div>
                                <div>{features.place}</div>
                            </div>
                            <div className="feature-sub-container">
                                <div>Magnitude</div>
                                <div>{features.mag}</div>
                            </div>
                            <div className="feature-sub-container">
                                <div>Time</div>
                                <div>{features.time}</div>
                            </div>
                            <div className="feature-sub-container">
                                <div>Status</div>
                                <div>{features.status}</div>
                            </div>
                            <div className="feature-sub-container">
                                <div>Tsunami</div>
                                <div>{features.tsunami}</div>
                            </div>
                            <div className="feature-sub-container">
                                <div>Type</div>
                                <div>{features.type}</div>
                            </div>
                        </div>
                    </React.Fragment>
                }

            </div>

        );
    }
}

