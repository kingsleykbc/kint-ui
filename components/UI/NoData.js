import React from 'react';
import classnames from 'classnames';
import ResultPage from './ResultPage';

const NoData = ({icon, message, subMessage, className }) => {
  const className = classnames(["NoData",{[className]: className }]);
  message = message || "No Data";
  
  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className={className}>
      <ResultPage
        icon={icon}
        title={message}
        subTitle={subMessage}
      />
    </div>
  );
};

export default NoData;