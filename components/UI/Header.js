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
    const {children, hPadding, vPadding, hasShadow, position} = this.props;

    /**
     * GET THE CSS
     */
    const padding = `${vPadding || "0"} ${hPadding || "20px"}`;
    const boxShadow = (hasShadow !== false) ? theme.boxShadows.medShadow : "none";

    return (
      <Row className="Header">
        {children}

        <style jsx>{`
          :global(.Header) {
            z-index: 5;
            width: 100%;
            position: ${position || "static"};
            top:0;
            left:0;
            height: 60px !important;
          }
        `}</style>
        
        { /* STYLE ======================================================================================= */}
        <style jsx>{`
          :global(.Header) {
            background: ${theme.colors.backgroundColor};
            padding: ${padding};
            box-shadow: ${boxShadow};
          }
        `}</style>
        
      </Row>
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