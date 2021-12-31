import React, { Component } from 'react';
import { XLg } from 'react-bootstrap-icons';
import './../css/Alert.css';

export default class Alert extends Component {
    state = {
        showComponent: true
    }

    render() {
        return (
            this.state.showComponent ? (
                <div className="alert">
                    <p>
                        {this.props.children}
                    </p>
                    <div className="alert-close" onClick={() => this.setState({showComponent: false})}>
                        <XLg />
                    </div>
                </div>
            ) : null
        );
    };
};