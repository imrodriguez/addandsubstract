import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Operation.scss';

const Operation = (props) => (
  <Container maxWidth="md" className="Operation">
    <Typography component="span">
      {props.numbers.num1} + {props.numbers.num2}
      =
      {props.result}
    </Typography>
  </Container>
);

export default Operation;
