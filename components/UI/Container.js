import React from 'react';
import classnames from 'classnames';
import theme from '../../config/theme';

const Container = (
  {
    background,
    children,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginVertical,
    marginHorizontal,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,

    responsiveWidth,

    responsiveMargin,
    responsiveMarginTop,
    responsiveMarginBottom,
    responsiveMarginLeft,
    responsiveMarginRight,
    responsiveMarginVertical,
    responsiveMarginHorizontal,
    responsivePadding,
    responsivePaddingTop,
    responsivePaddingBottom,
    responsivePaddingLeft,
    responsivePaddingRight,
    responsivePaddingVertical,
    responsivePaddingHorizontal,


    highlightOnHover,
    display,
    className,
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    alignment,
    borderDirections,
    borderWidth,
    borderColor,
    hasBorder,
    textColor,
    borderRadius,
    overflow,
    hasShadow,
    shadowSize,
    onClick
  }
) => {
  /**
   * GET CSS
   */
  // Border
  let borders = "";
  if (hasBorder){
    const borderValue = `${borderWidth || "1px"} solid ${borderColor || theme.colors.borderColor}`;
    borderDirections = borderDirections || "all";
    const allBorders = borderDirections === "all";

    if (allBorders || borderDirections.includes("l")) borders += `border-left: ${borderValue};`;
    if (allBorders || borderDirections.includes("r")) borders += `border-right: ${borderValue};`;
    if (allBorders || borderDirections.includes("b")) borders += `border-bottom: ${borderValue};`;
    if (allBorders || borderDirections.includes("t")) borders += `border-top: ${borderValue};`;
  }

  // Box Shadow
  const shadow = (shadowSize === "small") 
    ? theme.boxShadows.smallShadow 
    : (shadowSize === "large") ? theme.boxShadows.medShadow
    : theme.boxShadows.medShadow;

  const boxShadow = (hasShadow) ? shadow : "none";

  /**
   * MARGIN
   */
  const mTop = marginTop || marginVertical || margin || "0";
  const mRight = marginRight || marginHorizontal || margin || "0";
  const mBottom = marginBottom || marginVertical || margin || "0";
  const mLeft = marginLeft || marginHorizontal || margin || "0";
  margin = `${mTop} ${mRight} ${mBottom} ${mLeft}`;

  const hasResponsiveMargin = (
    responsiveMargin || responsiveMarginBottom || responsiveMarginTop || responsiveMarginLeft || 
    responsiveMarginRight || responsiveMarginHorizontal || responsiveMarginVertical
  );
  if (hasResponsiveMargin) {
    const rmTop = responsiveMarginTop || responsiveMarginVertical || responsiveMargin || mTop;
    const rmRight = responsiveMarginRight || responsiveMarginHorizontal || responsiveMargin || mRight;
    const rmBottom = responsiveMarginBottom || responsiveMarginVertical || responsiveMargin || mBottom;
    const rmLeft = responsiveMarginLeft || responsiveMarginHorizontal || responsiveMargin || mLeft;
    responsiveMargin = `${rmTop} ${rmRight} ${rmBottom} ${rmLeft}`;
  }

  /**
   * PADDING
   */
  const pTop = paddingTop || paddingVertical || padding || "0";
  const pRight = paddingRight || paddingHorizontal || padding || "0";
  const pBottom = paddingBottom || paddingVertical || padding || "0";
  const pLeft = paddingLeft || paddingHorizontal || padding || "0";
  padding = `${pTop} ${pRight} ${pBottom} ${pLeft}`;

  const hasResponsivePadding = (
    responsivePadding || responsivePaddingBottom || responsivePaddingTop || responsivePaddingLeft ||
    responsivePaddingRight || responsivePaddingHorizontal || responsivePaddingVertical
  );
  if (hasResponsivePadding) {
    const rpTop = responsivePaddingTop || responsivePaddingVertical || responsivePadding || pTop;
    const rpRight = responsivePaddingRight || responsivePaddingHorizontal || responsivePadding || pRight;
    const rpBottom = responsivePaddingBottom || responsivePaddingVertical || responsivePadding || pBottom;
    const rpLeft = responsivePaddingLeft || responsivePaddingHorizontal || responsivePadding || pLeft;
    responsivePadding = `${rpTop} ${rpRight} ${rpBottom} ${rpLeft}`;
  }

  /**
   * OTHERS
   */
  const hoverBackground = (highlightOnHover !== false && onClick) ? theme.colors.highlightColor : (background || "none");


  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className={classnames(["Container", { [className]: className }])} onClick={onClick}>
      {children}

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Container{
          margin: ${margin};
          padding: ${padding};
          display: ${display || "block"};
          width: ${width || "auto"};
          height: ${height || "auto"};
          max-width: ${maxWidth || "none"};
          max-height: ${maxHeight || "none"};
          min-width: ${minWidth || "none"};
          min-height: ${minHeight || "none"};
          text-align: ${alignment || "left"};
          color: ${textColor || theme.colors.textColor};
          border-radius: ${borderRadius || "0"};
          box-shadow: ${boxShadow};
          overflow: ${overflow || "visible"};
          ${onClick && "cursor: pointer;"};
          background: ${background || "none"};
          ${borders}
        }

        .Container:hover{
          background: ${hoverBackground};
          transition: background linear 0.3s;
        }

        @media screen and (max-width: ${ responsiveWidth || "800px"}){
          .Container {
            margin: ${hasResponsiveMargin ? responsiveMargin : margin};
            padding: ${hasResponsivePadding ? responsivePadding : padding};
          }
        }
      `}</style>
    </div>
  );
};

export default Container;