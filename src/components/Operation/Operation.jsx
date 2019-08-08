import React from 'react';
import Container from '@material-ui/core/Container';
import './Operation.scss';

const Operation = (props) => (
  <Container maxWidth="md" className="Operation">
      {props.numbers.num1} + {props.numbers.num2}
      =
      {props.result}
  </Container>
);

export default Operation;
