import React from 'react';

class TagButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        let activeClassName = this.state.active ? "active" : "inactive";

        return <button className={"tag-button " + activeClassName} onClick={
            (e) => {
                this.handleClick();
                this.props.action(activeClassName, this.props.value);
            }
            }>
            {this.props.value}
            </button>;
    }
}

export default TagButton;