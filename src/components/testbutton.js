import React, {Component} from 'react';

class TestButton extends Component {

  constructor(props){
    super(props);

  }

  render(){

    if(this.props.testMode == true){
      var txt = "Click to Learn";
    }
    else txt = "Click to Test";

    return (
      <div className="button">
        <button type="button" onClick={() => {this.props.onButtonClick(this.props.testMode)}}>
        {txt}
        </button>
      </div>
    );
  }

};

export default TestButton;
