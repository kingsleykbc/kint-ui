import React from 'react';
import DropDownView from '../DropDownView';
import ListView from '../ListView';
import Container from '../Container';
import { IconText } from '../TextComponents';
import theme from '../../../config/theme';

const DropOptions = ({options, origin, iconColor, color, ...props}) => {
  return (
    <DropDownView
      {...props}
      origin={origin || "top-right"}
      dropView={
        <Container padding="5px">
          <ListView 
            keyPrefix="dOption" 
            data={options} 
            component={DropOption} 
            globalColor={color}
            globalIconColor={iconColor}
          />
        </Container>
      }
      closeOnDropViewClick
    />
  );
};

/**
 * DROP OPTION
 */
const DropOption = ({icon, label, onClick, type, iconColor, color, globalColor, globalIconColor }) => {
  const defaultColor = type === "success" 
    ? theme.colors.successColor 
    : type === "danger" ? theme.colors.dangerColor 
    : null;

  const iColor = iconColor || globalIconColor || defaultColor;
  const textColor = color || globalColor || defaultColor;

  return (
    <Container onClick={onClick}>
      <IconText icon={icon} iconColor={iColor} color={textColor}>
        {label}
      </IconText>
    </Container>
  );
};

export default DropOptions;