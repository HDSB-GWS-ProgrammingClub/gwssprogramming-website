import React, { Component } from "react";
import "./../css/Title.css";
import GWPCLogo from "./../images/gwpc_logo.png";
import Alert from "./Alert";

export default class Title extends Component {
    render() {
        return (
            <>
                <div>
                    <Alert>
                        Ontario schools reopening after the winter break have been delayed 2 days, and will be opening on Jan. 5, 2022. For more information, <a href="https://news.ontario.ca/en/release/1001386/ontario-updating-public-health-measures-and-guidance-in-response-to-omicron" target="_blank" ref="noreferrer">click here</a>.
                    </Alert>
                </div>
                <div className="title">
                    <img src={GWPCLogo} alt="GWPC Logo" />
                    <h1>Garth Webb Programming Club</h1>
                </div>
                <p className="intro">
                    Welcome to the Garth Webb Programming Club!
                    <br />
                    On this website, you will find links to important events, and information on Google Classroom.
                </p>
            </>
        );
    };
};