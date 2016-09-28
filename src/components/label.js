import React,{Component} from 'react';


class Label extends Component {
  constructor(props){
    super(props);

    this.state = {
      correct: false,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.testMode == true && nextProps.label == nextProps.ans)
      {
        this.setState({correct: true,})
        this.props.onCorrect()
      }
  }

  render(){
    if(this.props.testMode == true && this.state.correct == false){
      var style = {visibility: 'hidden',};
    }

    else style = {};

    if(this.state.correct == true){
      style = {};
    }


    return <div className={this.props.cLass} style={style}>{this.props.label} </div>
    }

};

export default Label;
