import React from 'react';

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return <button className="submit-button " onClick={
            (e) => {
                this.props.action();
            }
            }>
            {this.props.value}
            </button>;
    }
}

export default SubmitButton;