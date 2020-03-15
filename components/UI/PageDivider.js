import React from 'react';
import theme from '../../config/theme';

const PageDivider = ({ label, labelPosition, vPadding,  borderWidth, borderColor }) => {

  /**
   * GET CSS
   */
  const left = (labelPosition == "right") ? "calc(100% - 20px)" : (labelPosition == "center") ? "calc(50% - 10px)" : "20px";

  return (
    <div className="PageDivider"> 
      {label && <h4 className="label">{label}</h4>}
      <hr/>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .PageDivider{
          position: relative;
        }
        
        .label{
          position: absolute;
          top: calc(50% - 10px);
          display: inline-block;
          padding: 0 10px;
          background: #fff;
        }
      `}</style>

      <style jsx>{`
        .PageDivider{
          padding: ${vPadding || "22px"} 0;
        }

        .label{
          left: ${left};
          color: ${theme.colors.lightestText}
        }

        .PageDivider :global(hr){
          border-width: ${borderWidth || "1px"};
          ${borderColor || `border-color: ${borderColor};`}
        }
      `}</style>
    </div>
  );
};

export default PageDivider;