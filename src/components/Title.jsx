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
                        The Ontario government has annnounced: "All publicly funded and private schools will move to remote learning starting January 5 until at least January 17, subject to public health trends and operational considerations." <a href="https://news.ontario.ca/en/release/1001394/ontario-temporarily-moving-to-modified-step-two-of-the-roadmap-to-reopen" target="_blank" rel="noreferrer">Click here</a> for more information.
                        <br /><br />
                        Check the club Google Classroom for updates on meetings during remote learning.
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