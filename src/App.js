import React from 'react';
import './App.css';

import SelectorPage from './pages/SelectorPage';
import ResultsPage from './pages/ResultsPage';
import LandingPage from './pages/Landing';
import menu from './img/menu.png';
import Menu from './components/Menu';
import LikedEvents from './pages/LikedEvents';
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
    this.jsonResults = [];
  }

  handleSubmit = (values) => {
    console.log("handleSubmit running with follow values:");
    console.log(values);

    values.forEach((value) => {
      fetch('https://hackprinceton-2019-back.herokuapp.com/api/heroku_395a14423f2d0c2/events?tag=Career_Fair')
        .then((response) => {
          return response.json();
        })
        .then((myJSON) => {
          console.log(JSON.stringify(myJSON));
        })
    }
    );

    // fetch('http://api.giphy.com/v1/gifs/search?api_key=TB0ogTreDooNVCAA5nYZtfoGoR8WIqt6&q=test&limit=5')
    // .then((response) => {
    //     return response.json();
    // })
    // .then((myJson) => {
    //     console.log(JSON.stringify(myJson));
    // })

    this.jsonResults = [
      {
        "id": "1",
        "name": "Wacken Open Air",
        "description": "Metal!",
        "host": "Wacken",
        "tag": "Music_Festival",
        "location": "Wacken, Germany",
        "time_start": "2020-07-09 22:00:00",
        "time_end": "2020-08-10 04:00:00",
        "link": "https://www.wacken.com/en/"
      },
      {
        "id": "2",
        "name": "SATURDAY NIGHT PARTY",
        "description": "Doors open at 10pm\nMusic by : NYC Local Djs\ntable reservation & Party booking rsvp@iclubnyc.com\nDress code: Classy but neat\n21 and over with proper ID /FINAL ENTRENCE IS UPTO THE DOORMAN Discretion\nSTRICT DRESS CODE POLICY: -Gentlemen: Shoes, Button down shirts, and jeans are acceptable. No baggy attire, Sneakers, Boots, or Hats are allowed. -Ladies: Heels & classy",
        "host": "ICLUBNYC",
        "tag": "Music_Festival",
        "location": "330 west 40th street",
        "time_start": "2019-11-09 22:00:00",
        "time_end": "2019-11-10 04:00:00",
        "link": "https://www.eventbrite.com/e/saturday-night-party-sky-room-nyc-tallest-rooftop-bar-lounge-times-square-tickets-28460729809?aff=ebdssbdestsearch"
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
            this.setState(this.default);
            this.setState({
              showSelection: !this.state.showSelection
            });
          }
        }
        likesAction={
          (e) => {
            this.setState(this.default);
            this.setState({
              becomeLikesPage: true,
              showMenu: false
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

  likeHandler = (obj) => {
    this.likeList.push(obj);
    console.log(this.likeList);
  }

  render() {
    let processedPage;

    if (this.state.becomeResultPage) {
      processedPage = <ResultsPage results={this.jsonResults} action={this.likeHandler} />
    } else if (this.state.becomeLikesPage) {
      processedPage = <LikedEvents likesList={this.likeList} />;
    }
    else {
      processedPage = <LandingPage action={(e) => {
        this.setState({
          showSelection: !this.state.showSelection
        })
      }} />
    }

    //<SelectorPage action={this.handleSubmit} />

    return <div>
      <div className="header">
        <div className="title" onClick={
          (e) => {
            this.setState(this.default);
          }
        }>
          <img className="logo" src={logo} />
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
