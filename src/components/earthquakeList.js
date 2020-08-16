import React, { Component } from 'react'
import '../App.css';
import { Link } from "react-router-dom";



class EarthquakeList extends Component {
    render() {
        const features = this.props.featureData.features;
        const featureCollection = this.props.featureData;
        return (
            <div className="marginTop20">
                <div className="app-sub-container">{featureCollection.metadata.title}</div>
                <table className="App-table">
                    <thead>
                    <tr>
                        <th>Place</th>
                        <th>Magnitude</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>{features.map(function (item, key) {

                        return (
                            <tr key={key}>
                                <td className="text-align-left">
                                    <Link to={'feature/' + (key + 1)}>
                                        <div>{item.properties.place}</div>
                                    </Link>
                                </td>
                                <td>{item.properties.mag}</td>
                                <td>{ new Date(item.properties.time).toISOString({hour:12})}</td>
                            </tr>
                        )
                    })}</tbody>
                </table>
            </div>
        )
    }
}

export default EarthquakeList;