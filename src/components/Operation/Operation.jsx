import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Operation.scss';

const Operation = (props) => (
  <Container maxWidth="md" className="Operation">
    <h2 align="center">Say the result of:</h2>
    <p align="center">Say it in English</p>
    <Typography component="p" align="center" className="operation">
      {props.numbers.num1} + {props.numbers.num2}
    </Typography>
  </Container>
);

export default Operation;
