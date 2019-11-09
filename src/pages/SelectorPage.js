import React from 'react';
import TagButton from '../components/TagButton';

/**
 *  Edit the tagList in constructor to change what each button says
 */

class SelectorPage extends React.Component {

    constructor(props) {
        super(props);
        this.tagList = [
            "Sample_1",
            "Sample_2",
            "Sample_3",
            "Sample_4",
            "Sample_5",
            "Sample_6",
            "Sample_7",
            "Sample_8",
            "Sample_9",
            "Sample_10",
            "Sample_11",
            "Sample_12",
            "Sample_13",
            "Sample_14",
            "Sample_15"
        ]
        this.selectedTags = [];
    }

    tagButtonClickedHandler = (value) => {
        this.selectedTags.push(value);
        console.log(this.selectedTags);
    }

    submitButtonClickedHandler = () => {

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
        // fetch('http://api.giphy.com/v1/gifs/search?api_key=TB0ogTreDooNVCAA5nYZtfoGoR8WIqt6&q=test&limit=5')
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((myJson) => {
        //         console.log(myJson.data[0].images.downsized.url);
        //     })

        return <div className="selector-page">
            <h1>Pick your favorite events!</h1>
            <div className="tag-buttons-wrapper">
                {this.getButtons()}
            </div>
            <div className="submit-button-wrapper">
                <button className="submit-button">Give Me Recommendation ►</button>
            </div>

        </div>
    }
}

export default SelectorPage;