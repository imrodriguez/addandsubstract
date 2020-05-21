import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './Result.scss';

const Result = (props) => (
  <div className="ResultWrapper">
    <h2 align="center">You said "{props.result}"</h2>
    <div className="icon">
      {props.check
        ? <FontAwesomeIcon icon={faCheckCircle} />
        : <FontAwesomeIcon icon={faTimesCircle} />}
    </div>
  </div>
);

export default Result;
