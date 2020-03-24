// A H.O.C To Handle Loading of Data or checking to see if data is empty (Styles in App.css)
import React from 'react';
import _ from 'lodash';
import DotLoader from './DotLoader';

/**
 * CHECK IF DATA IS LOADING OR EMPTY
 */
const isLoading = (data) => (data === null || data === undefined);
const isEmpty = (data) => (isLoading(data)) ? null : _.isEmpty(data);

// =======================================================================
//  THE COMPONENT
// =======================================================================
const LoaderHOC = ({ component: Component, loader, data, noData, noDataConfig, ...rest }) => {

  const Loader = loader || <DotLoader/>
  const EmptyData = noData || <NoData {...noDataConfig}/>;

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="flexGrow LoaderHOC">
      {(isLoading(data)) ? Loader : (isEmpty(data)) ? EmptyData : <Component data={data} {...rest} />}
    </div>
  );
}

export default LoaderHOC;
