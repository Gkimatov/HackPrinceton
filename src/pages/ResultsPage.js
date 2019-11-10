import React from 'react';
import ResultItem from '../components/ResultItem';
import './ResultsPage.css';

class ResultsPage extends React.Component {

    constructor(props) {
        super(props);
        this.resultsList = [];
        let list = [];
        let key = 0;
        this.props.results.forEach( (element) => {
            this.resultsList.push(<ResultItem
            object={element}
            swipeUp={this.swipeHandler}
            swipeLeft={this.swipeLeftHandler}
            swipeRight={this.swipeRightHandler}
            key={key}
            />)
            key++;
        });
        this.state = {
            currentIndex: 0
        }

        console.log("Constructor!");
    }

    //Increments currentIndex
    swipeHandler = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
    }

    swipeLeftHandler = () => {
        this.swipeHandler();
    }

    swipeRightHalnder = () => {
        this.swipeHandler();
    }

    //Made to consider situation when currentIndex = length
    handleDisplayedResult = () => {
        if (this.state.currentIndex !== this.props.results.length)
            return this.resultsList[this.state.currentIndex];
        else
            return <div className="no-more-results">There are no more results.<br/>Check back later!</div>
    }

    //fetch
        //return <ResultPage results={JSON}/>;
    render() {
        return <div className="results-page">
            {this.handleDisplayedResult()}
        </div>;
    }
}

export default ResultsPage;