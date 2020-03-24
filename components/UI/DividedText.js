import React from 'react';
import Dot from 'react-icons/lib/go/primitive-dot';
import theme from '../../config/theme';


const DividedText = ({ items, color, dividerColor, divider, paddingBetween }) => {

  /**
   * GET CSS VALS
   */
  dividerColor = dividerColor || color || theme.colors.lightestText;
  color = color || theme.colors.lightText;
  paddingBetween = paddingBetween || "7px";

  divider = <div className="Divider"> 
    {divider || <Dot />} 

    { /* STYLE ======================================================================================= */}
    <style jsx>{`
      .Divider{
        margin: 0 ${paddingBetween};
        font-size: 0.65rem;
      }

      .Divider :global(svg *){
        fill: ${dividerColor} !important;
      }
    `}</style>
  </div>; 

  const dividedText = items.map((item, index, arr) => {
    let dividerWid = (index < arr.length - 1) && divider;
    
    return (
      <span className="spannedText" key={index}>
        <div>{item}</div> {dividerWid}

        { /* STYLE ======================================================================================= */}
        <style jsx>{`
          .spannedText {
            display:inline-flex;
            align-items:center;
            flex-wrap: wrap;
            line-height: 25px;
          }

          .spannedText div {
            color: ${color};
          }
        `}</style>
      </span>
    )
  });

  return(
    <div className="DividedText">
      {dividedText}

      { /* STYLE ======================================================================================= */}
      <style jsx>{`        
        .DividedText{
          display:flex;
          align-items:center;
          flex-wrap: wrap;
          line-height: 25px;
        }

        .DividedText span *{
          vertical-align: middle;
        }
      `}</style>  
    </div>
  )
};

export default DividedText;
