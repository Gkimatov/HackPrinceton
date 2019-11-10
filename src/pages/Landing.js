import React from 'react';
import './Landing.css';
import landing from '../img/landing.jpg';

class Landing extends React.Component {
    render() {

        return <div className="landing-page">
            <img className="landing-img" src={landing}/>
            <div className="text-wrapper">
            <h1>Personalized events,<br/>just for you.</h1>
            <p>
                Evento's objective is to declutter young adult's lives by providing personalized events, just for you!<br/><br/>
                Ready to get started?<br/>
            </p>
            <button className="select-interest" onClick= {
                (e) => {
                    this.props.action();
                }
            }>
            Select your interest!
            </button>
            </div>
        </div>
    }

}

export default Landing;