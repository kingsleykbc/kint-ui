import React from 'react';
import classnames from 'classnames';

export const Flex = ({
  children, className, dir, justify, align, wrap, span, basis, responsiveCollapse, fillHeight, 
  crossSpan, stretchChildren, shrink,  width, responsiveWidth
}) => {
  
  /**
   * SETUP CSS
   */
  let flexAttr = "";
  if (dir){
    flexAttr = "display: flex;";
    align = align || (dir === "column" ? "flex-start" : "center");
    justify = justify || "flex-start";
  
    if (dir === "column"){
      let temp = align;
      align = (stretchChildren) ? "stretch" : justify;
      justify = temp;
    }
  }

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className={classnames(["Flex",{ [className]: className}])}>
      {children}



      { /* DYNAMIC STYLE ======================================================================================= */}
      <style jsx>{`
        .Flex{
          ${flexAttr}
          flex-direction: ${dir || "row"};
          align-items: ${align};
          align-self: ${crossSpan || "stretch"};
          justify-content: ${justify};
          width: ${width || "auto"};
          flex-grow: ${span || 0};
          flex-shrink: ${(shrink == 0) ? 0 : 1};
          flex-basis: ${basis || "auto"};
          height: ${fillHeight ? "100%" : "auto"};
          flex-wrap: ${wrap === false ? "nowrap" : "wrap"};
        }

        @media screen and (max-width: 800px){
          .Flex {
            width:${responsiveWidth || "100%"};
          }
        }

        @media screen and (max-width: ${responsiveCollapse}){
          .Flex {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
        }
        `}</style>
    </div>
  );
};

/**
 * ROW
 */
export const Row = ({ children, ...props }) => <Flex dir="row" {...props}>{children}</Flex>

/**
 * COLUMN
 */
export const Column = ({ children, ...props }) => <Flex dir="column" {...props}>{children}</Flex>

