import React,{useState, Fragment} from 'react';
import classnames from 'classnames';
import theme from '../../config/theme';

const TabSwitch = ({ 
  padding,
  tabs, onChange, color, activeColor, backgroundColor, switchColor, fontWeight, activeFontWeight, dividerColor
}) => {
  padding = padding || "4px";
  color = color || theme.colors.textColor;
  activeColor = activeColor || color;
  backgroundColor = backgroundColor || theme.colors.highlightColor;
  fontWeight = fontWeight || "normal";
  activeFontWeight = activeFontWeight || fontWeight;
  switchColor = switchColor || theme.colors.backgroundColor;
  dividerColor = dividerColor || theme.colors.borderColor;

  tabs = tabs || [];

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (tIndex) => {
    if (tabIndex === tIndex) return;

    setTabIndex(tIndex);
    if (onChange) onChange(tIndex);
  }

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="TabSwitch">
      {tabs.map((item,index)=>(     
          <div 
            className={classnames(["tabItem",{active: (tabIndex === index)}])} 
            key={`${item}_${index}`}
            onClick={()=> handleChange(index)}
          >
            {item}
          </div>
      ))}
      
      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .TabSwitch {
          display: flex;
          background: ${backgroundColor};
          border-radius: 6px;
          padding:${padding};
          position: relative;
          font-weight: ${fontWeight};
        }
        
        .tabItem{
          color: ${color};
          flex-grow: 1;
          text-align: center;
          padding: 8px;
          cursor: pointer;
          border-left: 1px solid ${dividerColor};
          margin-right: 4px;
          transition: background linear 0.2s;
        }
        
        .tabItem:last-child{
          margin-right: 0;
        }

        .tabItem:first-child{
          border-left: none;
        }

        .tabItem:hover{
          box-shadow: 0 2px 4px rgba(28, 27, 65, 0.15);
        }

        .tabItem.active{
          border-radius: 5px;
          border-color: ${switchColor};
          color: ${activeColor};
          background: ${switchColor};
          box-shadow: 0 2px 4px rgba(28, 27, 65, 0.15);
          font-weight: ${activeFontWeight};
        }

        .tabItem.active + .tabItem{
          border-left: none;
        }
      `}</style>
    </div>
  );
};

export default TabSwitch;