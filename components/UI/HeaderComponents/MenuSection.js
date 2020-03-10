import React,{useState} from 'react';
import {Flex, Row, Column} from '../Flex';

import IcMenu from 'react-icons/lib/md/menu';
import Drawer from '../Drawer';
import ResponsiveToggle from '../ResponsiveToggle';
import ClickableIcon from '../ClickableIcon';
import theme from '../../../config/theme';
import Con from '../Container';

const MenuSection = ({ children, alignment, responsiveIcon, className }) => {
  const span = (alignment && alignment != "right") && 1;
  const justify = (alignment == "left") ? "flex-start" : (alignment == "center") ? "center" : "flex-end";

  return (
    <ResponsiveToggle
      small = {<MobileMenu responsiveIcon={responsiveIcon}>{children}</MobileMenu>}
      large = {<DesktopMenu span={span} justify={justify}>{children}</DesktopMenu>}
    />
  );
};

/**
 * MOBILE VIEW
 */
const MobileMenu = ({ children,  responsiveIcon }) => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const toggleResponsiveMenu = () => setShowResponsiveMenu(!showResponsiveMenu);

  return (
    <Flex className="MenuSection">
      <ClickableIcon 
        icon={responsiveIcon || <IcMenu />} 
        onClick={toggleResponsiveMenu} 
        color={theme.colors.textColor} 
        hasBorder={true}
      />

      <Drawer show={showResponsiveMenu} toggle={toggleResponsiveMenu}>      

        <Column fillHeight={true} crossSpan="stretch">
          <Flex crossSpan="stretch">
            <Con padding="20px"> {children} </Con>
          </Flex>
        </Column>
      </Drawer>
    </Flex>
  );
}

/**
 * DESKTOP MENU
 */
const DesktopMenu = ({ children, span, justify}) => (
  <Row className="MenuSection" span={span} justify={justify}>
    {children}
  </Row>
);

export default MenuSection;