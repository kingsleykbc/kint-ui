// A H.O.C To Handle Loading of Data or checking to see if data is empty (Styles in App.css)
import React from 'react';
import _ from 'lodash';
import DotLoader from './DotLoader';
import NoData from './NoData';

/**
 * CHECK IF DATA IS LOADING OR EMPTY
 */
const isLoading = (data) => (data === null || data === undefined);
const isEmpty = (data) => (isLoading(data)) ? null : _.isEmpty(data);

// =======================================================================
//  THE COMPONENT
// =======================================================================
const LoaderHOC = ({ 
  component: Component, 
  loader,
  data,
  noData,
  noDataConfig,
  isFullScreen,
  ...rest 
}) => {

  const Loader = loader || <LoadingSection isFullScreen= {isFullScreen} />
  const EmptyData = noData || <NoData isFullScreen={isFullScreen} {...noDataConfig}/>;

  // =======================================================================
  //  UI
  // =======================================================================
  return (isLoading(data)) 
    ? Loader 
    : (isEmpty(data)) ? EmptyData 
    : <Component data={data} {...rest} />
}

export default LoaderHOC;

/**
 * THE DEFAULT LOADER
 */
const LoadingSection = ({ isFullScreen }) => {
  const dotSize = isFullScreen ? "30px" : "20px";
  const height = isFullScreen ? "100vh" : "180px";
  
  return (
    <div className="loadingSection">
      <DotLoader dotSize={dotSize} />

      <style jsx>{`
        .loadingSection {
          height: ${height};
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 10%;
        }
      `}</style>
    </div>
  );
};