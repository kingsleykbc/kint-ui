import React,{useState, useEffect} from 'react';
import theme from '../../config/theme';
import { Row } from './Flex';

const DropDownView = (
  { view, dropView, initialShow, trigger, origin, padding, highlightOnHover, matchWidth }
) => {
  const [display, setDisplay] = useState("none");
  const [displayClass, setDisplayClass] = useState("hide");
  const [show, setShow ] = useState(initialShow);
  const toggle = () => setShow(!show);

  trigger = trigger || "click";

  let positionConfig = `top: 100%; right:0;`;
  switch(origin){
    case "bottom-left": positionConfig = "top: 100%; left: 0;";
    case "top-left": positionConfig = "bottom: 100%; left: 0;";
    case "top-right": positionConfig = "bottom: 100%; right: 0;";
  }

  useEffect(() => {
    let timeOut;
    if (show) {
      setDisplayClass("show");
      setDisplay("block");
    }
    else {
      setDisplayClass("hide");
      timeOut = setTimeout(() => setDisplay("none"), 200);
    }
    return () => clearTimeout(timeOut);
  }, [show]);


  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="DropDownView">

      {/* VISIBLE VIEW */}
      <div className="view" onClick={trigger === "click" ? toggle : undefined} onMouseEnter={trigger === "hover" ? toggle : undefined}>
        {view}
      </div>

      {/* DROPDOWN VIEW */}
      {dropView && <div className={`dropView ${displayClass}`}>
          {dropView}
          {trigger === "hover" && <div className="safeArea"></div>}
        </div>
      }      

      {show && <div 
        className="back" 
        onClick={trigger === "click" ? toggle : undefined } 
        onMouseEnter={trigger === "hover" ? toggle : undefined }></div>
      }

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .DropDownView{
          position: relative;
        }

        .view{
          position: relative;
          min-width: 100px;
          min-height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          border-radius: 5px;
          transition: background-color linear 0.25s;
        }

        .view :hover{
          background: ${(highlightOnHover !== false) ? theme.colors.highlightColor : "none"};
        }

        .dropView {
          display: ${display};
          position: absolute;
          z-index: 4;
          padding: ${padding || "10px"};
          width:auto;
          ${positionConfig}
          border-radius: 3px;
          background: ${theme.colors.backgroundColor};
          box-shadow: ${theme.boxShadows.medShadow};
          white-space: nowrap;
          width: ${matchWidth ? "100%" : "auto"};
        }
        
        .dropView.show{
          animation: fadeIn 0.2s 1 linear forwards;
          
        }
        .dropView.hide{
          animation: fadeOut 0.2s 1 linear forwards;
          
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.7);
          }
        }

        .safeArea{
          z-index: -1;
          position: absolute;
          left: -20px;
          right: -20px;
          top: -20px;
          bottom: -20px;
        }

        .back {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2;
          right: 0;
          bottom: 0;
        }

      `}</style>
    </div>
  );
};



export default DropDownView;