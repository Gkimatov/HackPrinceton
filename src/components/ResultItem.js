import React from 'react';
import './ResultItem.css';
import {
    Swipeable,
    Draggable
} from 'react-touch';

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
        //Extract end date
        //is start date = end date?
        //return start date, time to time
        //else return start date time to end date time

        //Format: Nov 7th, Saturday, 3:00 PM - 5:00 PM
        return "Nov 7th, Saturday, 3:00 PM - 5:00 PM";
    }

    render() {
        return <Swipeable
            onSwipeUp={
                (e) => {
                    this.props.swipeUp();
                }
            }
            onSwipeLeft = {
                (e) => {
                    this.props.swipeLeft();
                }
            }
            onSwipeRight = {
                (e) => {
                    this.props.swipeRight();
                }
            }
            >
            <div className="result-item">
                <h1 className="title">{this.props.object.title}</h1>
                <div className="host">@{this.props.object.host}</div>
                <div className="description">{this.props.object.desc}</div>
                <span className="datetime">{this.processDateTime()}</span>
                <img src={this.props.object.img} />
            </div>
        </Swipeable>
    }
}

export default ResultItem;