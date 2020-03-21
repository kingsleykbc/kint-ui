import React, { Component } from 'react';
import {Row} from './Flex';
import theme from '../../config/theme';

import Logo from './HeaderComponents/Logo';
import AccountSection from './HeaderComponents/AccountSection';
import MenuSection from './HeaderComponents/MenuSection';
import SearchBar from './HeaderComponents/SearchBar';
import MenuItem from './HeaderComponents/MenuItem';
import SearchInput from './HeaderComponents/SearchInput';


export default class Header extends Component {
  render() {
    const {children, ribbonSection, hPadding, color, vPadding, hasShadow, position} = this.props;

    /**
     * GET THE CSS
     */
    const padding = `${vPadding || "0"} ${hPadding || "20px"}`;
    const boxShadow = (hasShadow !== false) ? theme.boxShadows.medShadow : "none";

    return (
      <div className="Header">
        {ribbonSection && <div className="ribbonSection">{ribbonSection}</div>}        
        <div className="HeaderWrap">
          <Row className="HeaderInner" span={1}>{children}</Row>
        </div>
        <style jsx>{`
          .Header {
            position: ${position || "static"} !important;
            width: 100%;
            top:0;
            z-index: 5;
            left:0;
            box-shadow: ${boxShadow};
          }

          .HeaderWrap {
            height: 60px !important;
            display: flex;
            align-items: center;
            z-index: 5;
            background: ${color ? color : theme.colors.backgroundColor};
            padding: ${padding};
          }

          .ribbonSection {
            background: ${theme.colors.primaryColor};
            color: #fff;
            padding: 10px 20px;
            font-weight: bold;
          }

        `}</style>          
      </div>
    );
  }
}

/**
 * LOGO SECTION
 */
Header.Logo = Logo;

/**
 * SEARCHBAR SECTION
 */
Header.SearchBar = SearchBar;

/**
 * SEARCH INPUT
 */
Header.SearchInput = SearchInput;

/**
 * SEARCHBAR SECTION
 */
Header.MenuSection = MenuSection;

/**
 * ACCOUNT SECTION
 */
Header.AccountSection = AccountSection;

/**
 * MENU ITEM
 */
Header.MenuItem = MenuItem;