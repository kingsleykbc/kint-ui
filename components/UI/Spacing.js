import React from 'react';

const Spacing = ({ padding, children,  responsivePadding, responsiveWidth }) => {
  padding = padding || "5px";

  return (
    <div>
      {children}
      
      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        div {padding: ${padding}}

        @media screen ${`and`} (max-width: ${responsiveWidth || "800px"}){
          div {padding: ${responsivePadding || padding}}
        }
      `}</style>
    </div>
  );
};

export default Spacing;