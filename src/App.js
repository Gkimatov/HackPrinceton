import React from 'react';
import './App.css';

import SelectorPage from './pages/SelectorPage';
import ResultsPage from './pages/ResultsPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      becomeResultPage: false
    }

    let jsonResults;

  }

  handleSubmit = (values) => {
    console.log("handleSubmit running with follow values:");
    console.log(values);

    //here we would do a fetch to backend
    this.jsonResults = [
      {
        title: "Photowalk",
        desc: "Sample description",
        img: "https://www.henryford.com/-/media/henry-ford-blog/images/mobile-interior-banner-images/2019/03/person-walking-on-path.jpg",
        host: "Photo Society of New York",
        tags: "Sample",
        date_start: "",
        date_end: "",
        time_start: "3:00 PM",
        time_end: "5:00 PM",
        link: "http://google.com/",
        location: "Dumbo, Brooklyn"
      },
      {
        title: "Example 2",
        desc: "Sample description",
        img: "https://www.henryford.com/-/media/henry-ford-blog/images/mobile-interior-banner-images/2019/03/person-walking-on-path.jpg",
        host: "Photo Socidasdsaety of New York",
        tags: "Samdsadsaple",
        date_start: "",
        date_end: "",
        time_start: "3:00 PM",
        time_end: "5:00 PM",
        link: "http://google.com/",
        location: "Dumbo, Brooklyn"
      }
    ]

    

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
