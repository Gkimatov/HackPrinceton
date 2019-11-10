import React from 'react';
import TagButton from '../components/TagButton';
import './SelectorPage.css';

/**
 *  Edit the tagList in constructor to change what each button says
 */

class SelectorPage extends React.Component {

    constructor(props) {
        super(props);
        this.tagList = [
            "Free Food",
            "Holiday Event",
            "Healthy Lifestyle",
            "Music Festival",
            "Art and Film Festival",
            "Food Fair",
            "Community Service",
            "Social Justice",
            "Speech", //Speaking Engagements
            "Career Fair",
            "Fun Games",
            "Brand Events"
        ]
        this.selectedTags = [];
        this.state = {
            noSelectionMsgShow: false
        };
    }

    displayNoSelectionMsg = () => {
        if (this.state.noSelectionMsgShow)
            return <span className="error-msg">No selections made!</span>
    }

    tagButtonClickedHandler = (state, value) => {
        //if it just became active, push it.
        //Otherwise, find value and delete from array.
        if (state === "inactive") {
            this.selectedTags.push(value);
        } else {
            this.selectedTags = this.selectedTags.filter( (arrayValue) => {
                return arrayValue !== value;
            })
        }
    }

    submitButtonClickedHandler = () => {
        if (Array.isArray(this.selectedTags) && this.selectedTags.length === 0)
            this.setState({
                noSelectionMsgShow: true
            })
        else
            this.props.action(this.selectedTags);
    }

    getButtons = () => {
        let list = [];
        let ii = 0;
        this.tagList.forEach((item) => {
            list.push(<TagButton value={item} key={ii} action={this.tagButtonClickedHandler} />)
            ii++;
        })

        return list;
    }

    render() {
        return <div className="selector-page">
            <h1>Pick your favorite events!</h1>
            <div className="tag-buttons-wrapper">
                {this.getButtons()}
            </div>
            <div className="submit-button-wrapper">
                <button className="submit-button" onClick={(e) => {this.submitButtonClickedHandler()}}>Give Me Recommendation ►</button>
            </div>
            {this.displayNoSelectionMsg()}

        </div>
    }
}

export default SelectorPage;