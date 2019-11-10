import React from 'react';
import './App.css';

import SelectorPage from './pages/SelectorPage';
import ResultsPage from './pages/ResultsPage';
import ResultItem from './components/ResultItem';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      becomeResultPage: false
    }

    //Convert this to persistence if we have time
    this.likeList = [];
  }

  handleSubmit = (values) => {
    console.log("handleSubmit running with follow values:");
    console.log(values);

    //here we would do a fetch to backend
    this.jsonResults = [
      {
        id: 1,
        title: "Photowalk",
        desc: "Sample description",
        img: "https://www.henryford.com/-/media/henry-ford-blog/images/mobile-interior-banner-images/2019/03/person-walking-on-path.jpg",
        host: "Photo Society of New York",
        tags: "Sample",
        datetime_start: "3:00 PM",
        datetime_end: "5:00 PM",
        link: "http://google.com/",
        location: "Dumbo, Brooklyn"
      },
      {
        id: 2,
        title: "Example 2",
        desc: "Sample description",
        img: "https://www.henryford.com/-/media/henry-ford-blog/images/mobile-interior-banner-images/2019/03/person-walking-on-path.jpg",
        host: "Photo Socidasdsaety of New York",
        tags: "Samdsadsaple",
        datetime_start: "3:00 PM",
        datetime_end: "5:00 PM",
        link: "http://google.com/",
        location: "Dumbo, Brooklyn"
      }
    ]

    this.setState( {
      becomeResultPage: true
    })

    

  }


  render() {
    if (this.state.becomeResultPage) {
      return <ResultsPage results={this.jsonResults}/>
    } else {
      return <SelectorPage action={this.handleSubmit}/>
    }
  }

}

export default App;
