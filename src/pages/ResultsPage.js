import React from 'react';
import ResultItem from '../components/ResultItem';

class ResultsPage extends React.Component {

    handleResults = () => {
        let list = [];
        let key = 0;
        this.props.results.foreach( (element) => {
            list.push(<ResultItem
            title={element.title}
            desc={element.desc}
            img={element.img}
            host={element.host}
            tags={element.tags}
            date_start={element.date_start}
            date_end={element.date_end}
            time_start={element.time_start}
            time_end={element.time_end}
            link={element.link}
            location={element.location}
            key={key}
            />)
        })
    }

    //fetch
        //return <ResultPage results={JSON}/>;
    render() {
        return <div className="results-page">
            {this.handleResults()}
        </div>;
    }
}

export default ResultsPage;