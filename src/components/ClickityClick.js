// Code ClickityClick Component Here

import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // define the initial state
    this.state = {
      hasBeenClicked: false
      // currentTheme: 'blue'
    };
  }

  // i'm calling the handleClick function as the onClick event

  // the function is seting the state to something else
  handleClick = () => {
    this.setState(
      {
        hasBeenClicked: true
      },
      () => console.log(this.state.hasBeenClicked)
    );
  };

  // state changes seem to happens instantly but they don't they happen asynchronously
  // if we want to access our new state after it has been updated- we can optionally add a callback as a second argument to the this.setState()
  // the callback will fire once the state has been updated, ensuring this.state is now the new shiny updated state

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
