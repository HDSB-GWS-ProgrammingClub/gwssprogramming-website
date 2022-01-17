import React, { Component } from "react";
import "./../css/Title.css";
import GWPCLogo from "./../images/gwpc_logo.png";
import Alert from "./Alert";

export default class Title extends Component {
    render() {
        return (
            <>
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