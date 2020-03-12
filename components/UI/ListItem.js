import React from 'react';
import IcGo from 'react-icons/lib/md/chevron-right';
import {Row} from './Flex';

import theme from '../../config/theme';


const ListItem = ({
  icon, title, subTitle, titleWeight, titleSize, subTitleColor, hasGoButton, onClick, onGoButtonClick, 
  hPadding, vPadding,  hasBottomBorder, hasShadow, growOnHover, goButtonIcon, iconColor, flexAlignment
}) => {

  /**
   * GET THE STYLES
   */
  flexAlignment = flexAlignment || "flex-start";
  const bottomBorder = (hasBottomBorder !== false && !hasShadow) ? `1px solid ${theme.colors.borderColor}` : "none";
  const padding = `${vPadding || "15px"}  ${(hPadding) ? hPadding : (hasShadow) ? "15px" : "0"}`;
  const boxShadow = hasShadow ? theme.boxShadows.smallShadow : "none";
  const margin = hasShadow ? "5px 0" : "0";
  const cursor = onClick ? "pointer" : "default";
  const transform = (growOnHover) ? "scale(1.1)" : "none";
 

  return (
    <div className="ListItem" onClick={onClick}>
 
      {/* LEADING ICON */}
      {icon && <div className="icon">{icon}</div>}

      {/* TITLE AND SUB TITLE */}
      <Row dir="column" span={1} className="titleAndSub">
        <h3> {title} </h3>
        {subTitle && <div className="subtitle">{subTitle}</div>}
      </Row>

      {/* GO BUTTON */}
      {hasGoButton && <div onClick={!onClick && onGoButtonClick} className="goIcon">{goButtonIcon || <IcGo/>}</div> }


      { /* STYLE ======================================================================================= */}

      <style jsx>{`
        .ListItem {
          display: flex;
          border-bottom: ${bottomBorder} !important;
          padding: ${padding};
          margin: ${margin};
          box-shadow: ${boxShadow};     
          cursor: ${cursor};
          transition: ${"all linear"} 0.3s;
          align-items: ${flexAlignment};
        }

        .ListItem:last-child {
          border-bottom: ${"none"} !important;
        }

        .ListItem:hover {
          transform: ${transform};
        }

        h3{
          margin-bottom: 8px;
          font-weight: ${titleWeight || "bold"};
          font-size: ${titleSize || "1.12rem"};
        }

        .icon{
          font-size: 2.5rem;
          margin-right: 10px;
          vertical-align: middle;
        }

        .subtitle {
          color: ${subTitleColor || theme.colors.lightText};
        }

        .ListItem :global( svg *){
          color: ${iconColor || theme.colors.primaryColor} !important;
          vertical-align: middle;
        }

        .goIcon{
          align-self: center;
        }

        .goIcon :global(svg){
          font-size: 1.3rem;
        }


        @media screen and (max-width: 800px){
          .icon {
            align-self: flex-start;
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ListItem;