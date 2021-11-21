import React, { Component } from "react";
import "./../css/Events.css";

class Event extends Component {
    render() {
        return (
            <div className="event-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-anchor-placement="center-bottom"
            >
                <div>
                    <img src={this.props.image} alt="" />
                </div>
                <div style={{width: '100%'}}>
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.hosts}</h3>
                    <hr />
                    <h3>{this.props.type}</h3>
                    <h3>{this.props.date}</h3>
                    {this.props.note ? (
                        <p>{this.props.note}</p>
                    ) : null}
                    <a className="event-button" href={this.props.url} target="_blank" rel="noreferrer">More information</a>
                </div>

            </div>
        );
    };
};

export default class Events extends Component {
    state = {
        events: null
    }

    async componentDidMount() {
        const response = await fetch('https://raw.githubusercontent.com/HDSB-GWS-ProgrammingClub/gwssprogramming-website/main/events.json');
        const json = await response.json();

        this.setState({events: json});
    }

    render() {
        return (
            <div className="events">
                <h2 style={{margin: '30px 0px 0px 0px', display: 'flex'}}>Events:</h2>
                {this.state.events ? (
                    this.state.events.map((event, key) =>
                        <Event key={key} image={event.image} title={event.title} hosts={event.hosts} type={event.type} date={event.date} url={event.url} note={event.note} />
                    )
                ) : null}
            </div>
        );
    };
};
