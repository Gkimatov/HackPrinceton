import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    render() {
        return <div className="menu">
            <ul>
                <li onClick={(e) => {
                    this.props.selectionAction();
                }}>Select Interests</li>
                <li onClick={
                    (e) => {
                        this.props.likesAction();
                    }
                }>Liked Events</li>
            </ul>
        </div>

    }
}

export default Menu;