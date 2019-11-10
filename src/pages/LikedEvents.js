import React from 'react';
import './LikedEvents.css';

class LikedEvents extends React.Component {

    processLikes = () => {
        let list = [];

        if (this.props.likesList.length > 0)
            this.props.likesList.forEach( (element) => {
                list.push(<li>{element.name}</li>)
            })
        else
            list.push(<span>You haven't added any events yet.<br/>Try selecting some interests!</span>)

        return list;
    }

    render() {
        return <div className="liked-events">
            <ul>
                {this.processLikes()}
            </ul>
        </div>
    }
}

export default LikedEvents;