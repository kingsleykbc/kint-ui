import React from 'react';
import theme from '../../config/theme';
import DotLoader from './DotLoader';
import CircularLoader from './CircularLoader';
import Container from './Container';

const Button = ({ 
  label, onClick, isLoading, rounded, disabled, borderRadius, icon, hasShadow, iconPosition, iconColor,
  filled, color, textColor, hoverColor, width, slideDirection, loadingText, showTextOnLoad, hPadding, vPadding
}) => {
  /**
   * ANIMATION SLIDE POSITION
   */
  const isVertical = (slideDirection === "top" || slideDirection === "bottom");
  let mainOrigin = (isVertical) 
    ? "left: 0; right: 0; width: 100%; height:0;" 
    : "top: 0; bottom: 0; width: 0; height: 100%;";
  let animationSlide = (isVertical) ? "height: 100%;" : "width: 100%;";
  let crossOrigin = (slideDirection === "left") ? "right: 0;" : "left: 0;";

  if (isVertical) crossOrigin = (slideDirection === "top") ? "bottom: 0;" : "top: 0;";

  /**
   * ICON
   */
  iconPosition = iconPosition || "left";
  const iconMargin = (!label) ? "" : (iconPosition === "right") ? "margin-left: 10px" : "margin-right: 10px";
  const paddingLeft = (icon && !isLoading && iconPosition != "right") ? "padding-left: 10px;" : "";
  
  /**
   * OTHERS
   */
  const loadingOrDisabled = (isLoading || disabled);
  if (isLoading) filled = true;
  let buttonColor = (disabled) ? theme.colors.lightestText : color || theme.colors.primaryColor;
  hoverColor = (loadingOrDisabled) ? "transparent" : hoverColor || "#000";
  const background = (filled) ? buttonColor : "none";
  borderRadius = (rounded) ? "60px" : (borderRadius) ? borderRadius : "5px";
  textColor = textColor ? textColor : (filled) ? "#fff" : buttonColor;
  let text = (isLoading && loadingText) 
    ? loadingText 
    : (isLoading && (!loadingText && !showTextOnLoad)) ? ""
    : label; 

  const vP = vPadding || "8px";
  const hP = hPadding ? hPadding : (!label) ? "8px" : "15px";
  const padding = `${vP} ${hP}`;
  const cursor = (disabled) ? "no-drop" : "pointer";

  onClick = (loadingOrDisabled) ? null : onClick;

  const loader = (text) 
    ? <Container marginRight="10px"><CircularLoader color="#fff" width="20px" light/></Container>
    : <DotLoader dotSize="10px" color="#fff" />;

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <button onClick={onClick}>
      {(icon && !isLoading && iconPosition === "left") && <div className="icon">{icon}</div>}
      {isLoading && loader}
      {text && text}
      {(icon && !isLoading && iconPosition === "right") && <div className="icon">{icon}</div>}
      
      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        button {
          width: ${width || "auto"};
          font-weight: bold;
          padding: ${padding};
          ${paddingLeft}
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: ${borderRadius};
          font-size: 1em;
          cursor: ${cursor};
          transition: all linear 0.2s;
          position: relative;
          overflow: hidden;
          color: ${textColor};
          background: none;
          border: 2px solid ${buttonColor};
          box-shadow: ${hasShadow ? `${theme.boxShadows.smallShadow}` : "none"};
        }
        
        button:hover {
          color: ${loadingOrDisabled ? `${textColor}` : "#fff"};
          border-color: ${loadingOrDisabled ? `${buttonColor}` : `${hoverColor}`};
        }

        button:before {
          content: "";
          position: absolute;
          background: ${hoverColor};
          ${mainOrigin}
          ${crossOrigin}
          z-index: -1;
          transition: all linear 0.2s;
        } 
        button:hover::before{
          ${animationSlide}
        }

        button::after{
          content: "";
          position: absolute;
          top: 0;
          background: ${background};
          left:0;
          height: 100%;
          width: 100%;
          z-index: -2;
        }

        button .icon {
          ${iconMargin}
        }

        button :global(svg){
          font-size: 1.2em;
        }
        
        button :global(svg *){
          color: ${iconColor || textColor};
        }

        button:hover :global(svg *){
          color: ${loadingOrDisabled ? `${iconColor || textColor}` : `#fff`};
        }
      `}</style>
    </button>
  );
};

export default Button;
