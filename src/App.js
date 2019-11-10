import React from 'react';
import './App.css';

import SelectorPage from './pages/SelectorPage';
import ResultsPage from './pages/ResultsPage';
import LandingPage from './pages/Landing';
import menu from './img/menu.png';
import Menu from './components/Menu';
import logo from './img/logo.png';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      becomeResultPage: false,
      becomeLikesPage: false,
      showSelection: false,
      showMenu: false
    }

    this.default = {
      becomeResultPage: false,
      becomeLikesPage: false,
      showSelection: false,
      showMenu: false
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

    this.setState({
      becomeResultPage: true,
      showSelection: false,
      showMenu: false
    })
  }

  showMenu() {
    if (this.state.showMenu)
      return <Menu
        selectionAction={
          (e) => {
            this.setState({
              showSelection: !this.state.showSelection
            });
          }
        }
        likesAction={
          (e) => {
            this.setState({
              showSelection: !this.state.showSelection
            });
          }
        }
      />
  }

  showSelection() {
    if (this.state.showSelection) {
      return <SelectorPage action={this.handleSubmit} />;
    }
  }


  render() {
    let processedPage;

    if (this.state.becomeResultPage) {
      processedPage = <ResultsPage results={this.jsonResults} />
    } else {
      processedPage = <LandingPage action={(e) => {
        this.setState({
          showSelection: !this.state.showSelection
        })
      }} />
    }

    //<SelectorPage action={this.handleSubmit} />

    return <div>
      <div className="header">
        <div class="title" onClick={
          (e) => {
            this.setState(this.default);
          }
        }>
          <img className="logo" src={logo}/>
          <h2>Evento</h2></div>
        <img className="hamburger" src={menu} onClick={
          (e) => {
            this.setState(
              {
                showMenu: !this.state.showMenu
              });
          }
        } />
        {this.showMenu()}
        {this.showSelection()}

      </div>
      {processedPage}
    </div>

  }

}

export default App;
