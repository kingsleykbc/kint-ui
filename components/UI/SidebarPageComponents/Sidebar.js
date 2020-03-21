import React, {useState, useEffect, Fragment} from 'react';
import classnames from 'classnames';
import IcMenu from 'react-icons/lib/md/dehaze';
import ClickableIcon from '../ClickableIcon';
import theme from '../../../config/theme';


const Sidebar = ({
  children,
  padding,
  width,
  height,
  topSpacing,
  mobileWidth,
  hasBorder,
  background,
  responsiveWidth,
  toggleButton,
  showToggleButton,

  show,
  toggle
}) => {
  const defaultClass = (show || (!show && show !== false)) ? "show" : "hide";  

  const [displayClass, setdisplayClass] = useState(defaultClass);
  useEffect(() => {
    setdisplayClass(defaultClass);
  }, [show]);

  const handleToggle = () => {
    if (toggle) toggle(); else setdisplayClass(displayClass === "hide" ? "show" : "hide");
  }

  padding = padding || "15px";
  background = background || theme.colors.highlightColor;
  width = width || "270px";
  height = height || `calc(100vh - ${topSpacing})`;
  topSpacing = topSpacing || "60px";
  mobileWidth = mobileWidth || "100%";
  const borderRight = (hasBorder) ? `1px solid ${theme.colors.borderColor}` : "none";
  const mobileMarginTop = (showToggleButton !== false) ? "50px" : "0";
  toggleButton = toggleButton || <ClickableIcon onClick={handleToggle} background={theme.colors.backgroundColor} size="45px" hasShadow icon={<IcMenu />} />;


  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <aside className={`Sidebar ${displayClass}`}>
      {(showToggleButton !== false) && <div className="toggleButton">{toggleButton}</div>}

      <div className="sidebarContent">
        {children}
      </div>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Sidebar {          
          flex-shrink: 0;
          background: ${background};
          min-height: ${height};
          border-right: ${borderRight};
          height: 100%;
          position: sticky;
          top: ${topSpacing};
        }

        .toggleButton {
          position: absolute;
          right: -55px;
          top: 10px;
        }

        .sidebarContent {
          margin-left: 0;
          padding: ${padding};
          width: ${width};
          transition: margin linear 0.2s;
        }

        .hide .sidebarContent {
          margin-left: -${width};
          overflow: hidden;
        }

        @media screen ${`and`} (max-width: ${responsiveWidth || "800px"}){
          .Sidebar {
            position: fixed;
            top: ${topSpacing};
            bottom: 0;
            width: ${mobileWidth};
            max-width: 100%;
            overflow: auto;
            box-shadow: ${theme.boxShadows.largeShadow};
            transition: all linear 0.2s;
          }

          .sidebarContent {
            margin-left: 0 !important;
            margin-top: ${mobileMarginTop};
            width: auto !important;
          }

          .Sidebar.show {
            margin-left: -100%;
          }

          .Sidebar.hide {
            margin-left: 0;
          }

          .toggleButton {
            position: fixed;
            left: 10px;
            top: calc(${topSpacing} + 10px);
          }

        }
      `}</style>
    </aside>
  );
}


export default Sidebar;
