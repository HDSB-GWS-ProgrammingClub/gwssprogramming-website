import React, { Component } from "react";
import "./../css/QuickLinks.css";
import ClassroomIcon from "./../images/classroom_icon.png";
import GithubIcon from "./../images/github_icon.png";
import DiscordIcon from "./../images/discord_icon.png";
import YouTubeIcon from "./../images/youtube_icon.png";
import InstagramIcon from "./../images/instagram_icon.png";
import GWSSLogo from "./../images/gwss_logo.png";
import Button from "./Button";

class ImageLink extends Component {
    render() {
        return (
            <a href={this.props.url} target="_blank" rel="noreferrer"
                data-aos="zoom-out-down"
                data-aos-delay={this.props['data-aos-delay']}
                data-aos-duration="700"
            >
                <img src={this.props.image} alt={this.props.alt} />
            </a>
        );
    };
};

class TextLink extends Component {
    render() {
        return (
            <Button url={this.props.url} data-aos="zoom-out-down" data-aos-delay={this.props['data-aos-delay']} data-aos-duration="700" data-aos-anchor="top-bottom">{this.props.children}</Button>
        );
    };
};

export default class QuickLinks extends Component {
    render() {
        return (
            <>
                <div className="quicklinks-imagelink">
                    <ImageLink url="http://bit.ly/gwsics2020" image={ClassroomIcon} alt="Google Classroom" data-aos-delay="300" />
                    <ImageLink url="https://github.com/hdsb-gws-programmingclub" image={GithubIcon} alt="GitHub" data-aos-delay="500" />
                    <ImageLink url="https://discord.gg/S6NAzfdfYg" image={DiscordIcon} alt="Discord" data-aos-delay="700" />
                    <ImageLink url="https://www.youtube.com/channel/UCRQykAZN3cenPXuVbTqdxgw" image={YouTubeIcon} alt="YouTube" data-aos-delay="900" />
                    <ImageLink url="https://www.instagram.com/gwss_programming_club/" image={InstagramIcon} alt="Instagram" data-aos-delay="1100" />
                    <ImageLink url="https://gws.hdsb.ca/" image={GWSSLogo} alt="GWSS" data-aos-delay="1300" />
                </div>
                <h2 style={{textAlign: 'center'}}>Resources:</h2>
                <div className="quicklinks-textlink">
                    <TextLink url="https://classroom.google.com/c/MjM1Mjk3MjczNTUy/m/MjcwODE2ODYxMDQ1/details" data-aos-delay="400">Info for new joiners</TextLink>
                    <TextLink url="https://drive.google.com/drive/folders/1ZtOD0Hr1nDZwdGoIllxFcvWzTMAsvcba?usp=sharing" data-aos-delay="800">Learn to code</TextLink>
                    <TextLink url="https://drive.google.com/drive/folders/1svprXe5s60OLeZ9CVQkMSkXn4W2wfUef?usp=sharing" data-aos-delay="1200">Past programming challenges</TextLink>
                </div>
            </>
        );
    };
};
