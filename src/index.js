import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LabelList from './components/labellist';
import TestButton from './components/testbutton';
import AnswerInput from './components/answerinput';
import Image from './components/image'

const DATA = [["label aorta","Aorta"],["label vena", "Vena cava"]
,["label righta","Right atrium"],["label tricus","Tricuspid valve"],
["label pulm","Pulmonery artery"], ["label lefta","Left atrium"],
["label pulmv","Pulmonery vein"],["label bicus","Bicuspid valve"],
["label leftv","Left ventricle"],["label rightv", "Right ventricle"]];


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        testMode: false,
        answerString: ""
      };
    }

  render(){
    return (
      <div className="app">
        <TestButton onButtonClick={testMode => {testMode=!testMode;this.setState({testMode});}} testMode={this.state.testMode}/>
        <AnswerInput testMode={this.state.testMode} ansString={this.state.answerString} onAns={(ans)=>{this.setState({answerString: ans})}}/>
        <Image />
        <LabelList datas={DATA} ans={this.state.answerString} testMode={this.state.testMode} onCorrect={()=>{this.setState({answerString: ''})}} />
      </div>);
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
