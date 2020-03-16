import React from 'react';
import theme from '../../config/theme';

const PageDivider = ({ label, labelPosition, vPadding,  borderWidth, borderColor }) => {

  /**
   * GET CSS
   */
  const left = (labelPosition === "center") ? "calc(50% - 10px)" : (labelPosition === "right") ? "auto" : "20px";
  const right = (labelPosition === "right") ? "20px" : "auto";

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
          right: ${right};
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