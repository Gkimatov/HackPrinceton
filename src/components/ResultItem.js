import React from 'react';
import './ResultItem.css';
import {
    Swipeable,
    Draggable
} from 'react-touch';
import join from '../img/join.png';
import share from '../img/share.png';
import defaultimg from '../img/default.jpg';


// title={element.title}
// desc={element.desc}
// img={element.img}
// host={element.host}
// tags={element.tags}
// date_start={element.date_start}
// date_end={element.date_end}
// time_start={element.time_start}
// time_end={element.time_end}
// link={element.link}
// location={element.location}
// key={key}

class ResultItem extends React.Component {

    //Need MongoDB DateTime format
    processDateTime = () => {
        //Extract start date

        let weekday = new Array(7);
        weekday[0] = "Mon";
        weekday[1] = "Tue";
        weekday[2] = "Wed";
        weekday[3] = "Thu";
        weekday[4] = "Fri";
        weekday[5] = "Sat";
        weekday[6] = "Sun";

        let startDate = new Date(this.props.object.time_start);
        let endDate = new Date(this.props.object.time_end);
        //Extract end date
        //is start date = end date?
        //return start date, time to time
        //else return start date time to end date time

        //Format: Nov 7th, Saturday, 3:00 PM - 5:00 PM

        return weekday[startDate.getDay()] + " " + startDate.toLocaleString('default', { month: 'short'}) + " " + startDate.getDate() + " " + startDate.getHours() % 12 + ":" + (startDate.getMinutes() < 10 ? "0" : "" ) + startDate.getMinutes() + (startDate.getHours > 12 ? "PM" : "AM")
        + " to " +
        weekday[endDate.getDay()] + " " + endDate.toLocaleString('default', { month: 'short'}) + " " + endDate.getDate() + " " + endDate.getHours() % 12 + ":" + (endDate.getMinutes() < 10 ? "0" : "" ) + endDate.getMinutes() + (endDate.getHours > 12 ? "PM" : "AM");

        //return "Nov 7th, Saturday, 3:00 PM - 5:00 PM";
    }

    render() {
        return <Swipeable
            onSwipeUp={
                (e) => {
                    this.props.swipeUp();
                }
            }
            onSwipeLeft={
                (e) => {
                    this.props.swipeLeft();
                }
            }
            onSwipeRight={
                (e) => {
                    this.props.swipeRight(this.props.object);
                }
            }
        >
            <div className="result-item">
                <h1 className="title">{this.props.object.name}</h1>
                <div className="host">@{this.props.object.host}</div>
                <div className="description">{this.props.object.description}</div>
                <span className="datetime">{this.processDateTime()}</span>
                <img className="feature-img" src={defaultimg} />

                <div className="social-buttons-wrapper">
                    <div className="custom-sharing-button">
                        <a href="http://google.com">
                            <img src={share} />
                        </a>
                    </div>

                    <div className="link-button">
                        <a href={this.props.object.link}>
                            <img src={join} />
                        </a>
                    </div>
                </div>

            </div>
        </Swipeable>
    }
}

export default ResultItem;