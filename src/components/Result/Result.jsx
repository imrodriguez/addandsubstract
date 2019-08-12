import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './Result.scss';

const Result = (props) => {
  let icon;
  if (props.check) {
    icon = <FontAwesomeIcon icon={faCheckCircle} />;
  } else {
    icon = <FontAwesomeIcon icon={faTimesCircle} />;
  }
  return (
    <div className="ResultWrapper">
      <div className="icon">
        {icon}
      </div>
    </div>
  )
};

export default Result;
