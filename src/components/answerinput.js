import React,{Component} from 'react';

class AnswerInput extends Component {
  constructor(props){
    super(props);
  }

  render(){

    if(this.props.testMode == false){
      return <div></div>
    }

    return(
      <div className="AnswerInput">
        <input
        value={this.props.ansString}
        onChange={(event) => this.onInput(event.target.value)}
        placeholder={"Type here..."}
        />
      </div>
    );
  }

  onInput(ans){
    this.props.onAns(ans);
  }

};



export default AnswerInput;
