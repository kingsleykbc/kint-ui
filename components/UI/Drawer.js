import React, { useEffect, useState } from 'react';
import Portal from './Portal';
import theme from '../../config/theme';
import ClickableIcon from './ClickableIcon';

const Drawer = ({ toggle, show, children, size, direction, behindHeader }) => {

  /**
   * GET THE CSS
   */
  direction = direction || "right";
  size = size || "300px";
  const isHorizontal = direction == "right" || direction == "left";
  const adjacentValues = (isHorizontal) ? "top: 0; bottom: 0;" : "left: 0; right: 0;";
  const sizeAttr = (isHorizontal) ? "width" : "height";

  const [display, setDisplay] = useState("none");
  const [displayClass, setDisplayClass] = useState("hide");

  useEffect(() => {
    let timeOut;

    if (show){
      setDisplayClass("show");
      setDisplay("block");
    }
    else{
      setDisplayClass("hide");
      timeOut = setTimeout(() => setDisplay("none"), 200);
    }
    return () => clearTimeout(timeOut);
  }, [show]);

  return (
    <Portal selector="#portal">
      <div className="drawer">

        {/* DRAWER */}
        <div className={`drawerNav ${displayClass}`}>

          {/* CLOSE BUTTON */}
          <div className="closeIcon">
            <ClickableIcon
              icon="&times;"
              background="#fff" 
              hasShadow={true} 
              onClick={toggle} 
              fontSize="2.2rem" 
              highlightBackground={false}
            />
          </div>
          
          {children}
        </div>

        {/* BACKDROP */}
        <div className={`backdrop ${displayClass}`} onClick={toggle}></div>

        { /* STYLE ======================================================================================= */}
        <style jsx>{`
          .drawer{            
            position: fixed;
            left:0;
            top:0;
            width:100%;
            display:${display};
            height: 100%;
            background: transparent;
            overflow: hidden;
            z-index: ${behindHeader ? 4 : 6};
          }

          .backdrop{
            position: absolute;
            top:0;
            left:0;
            right: 0;
            bottom: 0;
            opacity: 0;
            cursor: pointer;
            z-index: 3;
            background: ${theme.colors.tintColor};
          }
          .closeIcon {
            position: absolute;
            right: 10px;
            top: 10px;
          }

          .backdrop.show{
            animation: fadeIn 0.2s 1 linear forwards;
          }
          .backdrop.hide{
            animation: fadeOut 0.2s 1 linear forwards;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .drawerNav{
            position: fixed;
            ${adjacentValues}
            ${direction}:0;
            height: 100%;
            ${sizeAttr}: ${size};
            z-index: 4;
            background: #fff;
            padding-top: ${behindHeader ? "70px" : "10px"};
          }

          .drawerNav.show{
            animation: slideIn 0.2s 1 linear forwards;
          }
          .drawerNav.hide{
            animation: slideOut 0.2s 1 linear forwards;
          }

          @keyframes slideIn {
            0% {
              ${direction}: -${size};
            }
            100% {
              ${direction}: 0;
            }
          }

          @keyframes slideOut {
            0% {
              ${direction}: 0;
            }
            100% {
              ${direction}: -${size};
            }
          }
          
        `}</style>

      </div>
    </Portal>
  );
};

export default Drawer;