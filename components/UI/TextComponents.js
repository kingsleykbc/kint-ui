import React from 'react';
import { slicer } from '../../functions/functions';
import theme from '../../config/theme';
import Container from './Container';
import IcWarning from 'react-icons/lib/md/warning';
import IcInfo from 'react-icons/lib/md/info-outline';

// =======================================================================
//  TEXT
// =======================================================================
export const Text = ({ children, wrap, slicedAt, color, fontStyle, fontSize, fontWeight, fontFamily, lineHeight, alignment }) => {
  const text = (slicedAt) ? slicer(children, slicedAt): children;
  
  return (
    <span className="Text">
      {text}

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Text {
          color: ${color || theme.colors.textColor};
          font-size: ${fontSize || "1rem"};
          word-wrap: ${wrap ? "break-word" : "normal"};
          word-break: ${wrap ? "break-all" : "normal"};
          font-style:  ${fontStyle || "normal"};
          font-weight: ${fontWeight || "normal"};
          font-family: ${fontFamily || "Arial, Helvetica, sans-serif"};
          line-height: ${lineHeight || "25px"};
          text-align: ${alignment || "inherit"};
        }
      `}</style>
    </span>
  );
};


// =======================================================================
//  PARAGRAPHS
// =======================================================================
export const Par = ({ children, wrap, slicedAt, color, fontStyle, fontWeight, fontSize, lineHeight, alignment }) => {
  const text = (slicedAt) ? slicer(children, slicedAt) : children;

  return (
    <p className="Par">
      {text}

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Par {
          color: ${color || theme.colors.textColor};
          font-size: ${fontSize || "1rem"};
          line-height: ${lineHeight || "25px"};
          word-wrap: ${wrap ? "break-word" : "normal"};
          word-break: ${wrap ? "break-all" : "normal"};
          font-style:  ${fontStyle || "normal"};
          font-weight: ${fontWeight || "normal"};
          text-align: ${alignment || "inherit"};
        }
      `}</style>
    </p>
  );
};


// =======================================================================
//  TEXT WITH ICON
// =======================================================================
export const IconText = (
  { children, padding, align, icon, iconColor, iconSize, iconBack, iconBackColor, iconBackSize, ...textProps }
) => {
  return (
    <div className="IconText" >
      {icon && <div className="icon">{icon}</div>}
      <Container marginLeft={icon && "10px"} marginRight={iconBack && "10px"}>
        <Text {...textProps}>{children}</Text>
      </Container>
      {iconBack && <div className="iconBack">{iconBack}</div>}
      

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .IconText {
          display: inline-flex;
          align-items: ${align || "center"};
          padding: ${padding || "10px"};
        }

        .icon{
          ${align === "flex-start" && "margin-top: 5px;"}
        }

        .icon :global(svg){
          font-size: ${iconSize || "1.5rem"};
          vertical-align: middle;
        }

        .iconBack :global(svg){
          font-size: ${iconBackSize || "1.5rem"};
          vertical-align: middle;
        }

        .icon :global(svg *){
          color: ${iconColor || theme.colors.primaryColor};
        }

        .iconBack :global(svg *){
          color: ${iconBackColor || theme.colors.secondaryColor};
        }
      `}</style>
    </div>
  );
};


/**
 * INFO TEXT
 */
export const InfoText = ({ children, icon, isWarning }) => {
  icon = (isWarning) ? <IcWarning/> : <IcInfo />;

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <IconText 
      icon={icon} align="flex-start"
      color={theme.colors.lightText}
      iconColor={isWarning ? theme.colors.warningColor : theme.colors.lightText}
    >
      {children}
    </IconText>
  );
}