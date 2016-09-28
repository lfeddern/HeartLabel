import React, {Component} from 'react';
import Label from './label'

class LabelList extends Component {

  render(){
  const labels = this.props.datas.map((data) => {
    return <Label onCorrect={this.props.onCorrect} cLass={data[0]} label={data[1]} key={data[1]} ans={this.props.ans} testMode={this.props.testMode} />
    });

    return <div className="labelList">{labels}</div>;
    };
};

export default LabelList;
