import React, { Component } from "react";
import "./../css/style.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import Title from "./Title";
import QuickLinks from "./QuickLinks";
import Events from "./Events";

export default class App extends Component {
    componentDidMount() {
        AOS.init();
    };

    render() {
        return (
            <>
                <Title />
                <QuickLinks />
                <Events />
            </>
        );
    };
};