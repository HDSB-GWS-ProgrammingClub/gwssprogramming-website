import React, { Component } from "react";
import "./../css/Button.css";

export default class Button extends Component {
    render() {
        return (
            <div
                data-aos={this.props['data-aos']}
                data-aos-delay={this.props['data-aos-delay']}
                data-aos-duration={this.props['data-aos-duration']}
                data-aos-anchor={this.props['data-aos-anchor']}
            >
                <a className="button" href={this.props.url} target="_blank" rel="noreferrer">{this.props.children}</a>
            </div>
        );
    };
};
