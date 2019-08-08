import React, { PureComponent } from 'react';
import Operation from '../Operation/index';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: { state: false, message: '' },
      classifier: '',
      result: '',
      numbers: {},
      check: ''
    };
  }

  componentDidMount = () => {
    this.detect();
    this.calculeNumbers();
  }

  calculeNumbers = () => {
    this.setState({
      numbers: {
        num1: Math.floor(Math.random() * 5),
        num2: Math.floor(Math.random() * 5)
      }
    });
  }

  checkResult = () => {
    let numbersWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let resultInt = numbersWords.indexOf(this.state.result.label);
    if ((this.state.numbers.num1 + this.state.numbers.num2) === resultInt) {
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
    }
  }

  detect = () => {
    console.log('detect');
    const options = { probabilityThreshold: 0.7 };
    this.setState({ classifier: window.ml5.soundClassifier('SpeechCommands18w', options, this.modelReady) })
  }

  modelReady = () => {
    console.log('modelReady');
    this.state.classifier.classify(this.gotResult);
  }

  gotResult = (error, result) => {
    if (error) {
      this.setState({ error: { state: true, message: error } });
      return;
    }
    this.setState({ result: result[0] });
    this.checkResult();
  }

  render() {
    if (this.state.error.state) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>this.state.error.message</p>
        </div>
      );
    }
    return (
      <div className="MainWrapper">
        <Operation numbers={this.state.numbers} result={this.state.result} check={this.state.check} />
      </div>
    );
  }
}

export default Main;
