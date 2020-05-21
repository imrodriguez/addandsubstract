import React, { PureComponent } from 'react';
import Operation from '../Operation';
import Result from '../Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

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

  checkResult = (result) => {
    this.setState({ classifier: '' });
    let numbersWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let resultInt = numbersWords.indexOf(result);
    if (this.state.check === '') {
      this.setState({ result: result });
      if ((this.state.numbers.num1 + this.state.numbers.num2) === resultInt) {
        this.setState({ check: true });
      } else {
        this.setState({ check: false });
      }
    }
  }

  detect = () => {
    const options = { probabilityThreshold: 0.7 };
    this.setState({ classifier: window.ml5.soundClassifier('SpeechCommands18w', options, this.modelReady) })
  }

  modelReady = () => {
    this.state.classifier.classify(this.gotResult);
  }

  gotResult = (error, result) => {
    if (error) {
      this.setState({ error: { state: true, message: error } });
    } else {
      this.checkResult(result[0].label);
    }
  }

  render() {
    if (this.state.error.state) {
      return (
        <div align="center" style={{marginTop: 'margin-top: 10%'}}>
          <FontAwesomeIcon icon={faMicrophone} size="lg" style={{fontSize: '5em'}}/>
          <h2>You should accept microphone permission to use this application</h2>
          <p>{this.state.error.message}</p>
        </div>
      );
    }
    if (this.state.check === true || this.state.check === false) {
      return (
        <Result check={this.state.check} result={this.state.result} />
      );
    }
    return <Operation numbers={this.state.numbers} result={this.state.result} check={this.state.check} />
  }
}

export default Main;
