import React, { Component } from "react";
import "./../css/Events.css";
import Button from "./Button";

class Event extends Component {
    render() {
        return (
            <div className="event-card"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-anchor-placement="center-bottom"
            >
                <div className="event-images">
                    {typeof this.props.image === "string" ? (
                        <img src={this.props.image} alt="" />
                    ) : (
                        this.props.image.map((image, key) =>
                            <img src={image} alt="" key={key} />
                        )
                    )}
                </div>
                <div>
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.hosts}</h3>
                    <h3>{this.props.type}</h3>
                    <h3>{this.props.date}</h3>
                    <hr />
                    {this.props.note ? (
                        typeof this.props.note === "string" ? (
                            <p>{this.props.note}</p>
                        ) : (
                            this.props.note.map((note, key) =>
                                <p key={key}>{note}</p>
                            )
                        )
                    ) : null}
                    <Button url={this.props.url}>More information</Button>
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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeErRk8JE0g7mS6TFtKH7pZJ_XieiQnfsLG5aoiDCCZ03LyPQ/viewform?embedded=true" width="800" height="500" title="Events" frameBorder="0"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-anchor-placement="center-bottom"
                ></iframe>
            </div>
        );
    };
};
