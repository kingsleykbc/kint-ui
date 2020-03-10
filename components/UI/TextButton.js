import React from 'react';
import { Text } from './TextComponents';
import theme from '../../config/theme';

const TextButton = ({children, color, onClick, padding, ...props}) => {
  color = color || theme.colors.primaryColor;

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="TextButton" onClick={onClick}> 
      <Text {...props} color={color}> {children} </Text>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .TextButton {
          display: inline-block;
          padding:${padding || "0"};
          cursor: pointer;
          color: ${color};
        }

        .TextButton:hover{
          text-decoration: underline;
        }     
      `}</style>
    </div>
  );
};

export default TextButton;