import React from 'react';
import theme from '../../config/theme';

const ClickableIcon = (
  { icon, color, onClick, fontSize, background, hasBorder, hasShadow, borderColor, filled, highlightBackground }
) => {
  highlightBackground = !(highlightBackground === false);
  const mainColor = color || theme.colors.primaryColor;

  const mainBorderColor = borderColor ? borderColor : (filled) ? mainColor : theme.colors.highlightColor;
  const border = hasBorder ? `2px solid ${mainBorderColor}` : "none";
  const iconBackground = filled ? mainColor : (background) ? background : "transparent";
  const iconColor = filled ? "#fff" : mainColor;

  return (
    <div className="ClickableIcon">
      <div className="iconCover" onClick={onClick}>{icon}</div>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .iconCover {
          border: ${border};
          border-radius: 5px;
          width: 40px;
          height: 40px;
          align-items: center;
          display: flex;
          color: ${iconColor};
          overflow: hidden;
          justify-content: center;
          cursor: pointer;
          font-size: ${fontSize || "1.5rem"};
          background: ${iconBackground};
          box-shadow: ${hasShadow ? theme.boxShadows.medShadow : "none"};
          transition: background linear 0.3s;
        }
        
        .iconCover :global(svg){
          font-size: ${fontSize || "1.5rem"};
        }
        
        .iconCover :global(svg *){
          color: ${iconColor};
        }

        .iconCover:hover{
          background: ${highlightBackground ? "#000" : "transparent" };
          color: ${highlightBackground ? "#fff" : "#000" };
          border-color: #000;
        }

        .iconCover:hover :global(svg *){
          color: ${highlightBackground ? "#fff" : "#000" };
        }
      `}</style>
    </div>
  );
};

export default ClickableIcon;