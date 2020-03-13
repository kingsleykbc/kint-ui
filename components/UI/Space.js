import React from 'react';

const Space = ({padding, children}) => {
  padding = padding || "5px";

  return (
    <div>
      {children}
      
      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        div {padding: ${padding}}
      `}</style>
    </div>
  );
};

export default Space;