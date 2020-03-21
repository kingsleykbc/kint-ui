import React,{useState, Fragment} from 'react';
import Link from './UI/Link';
import theme from '../config/theme';
import Header from './UI/Header';
import DropDownView from './UI/DropDownView';
import Container from './UI/Container';
import { IconText } from './UI/TextComponents';

import IcAccount from 'react-icons/lib/md/person';
import IcUI from 'react-icons/lib/md/spa';
import Option from 'react-icons/lib/md/flag';
import { Column } from './UI/Flex';
import TextButton from './UI/TextButton';

const TestHeader = () => {

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <Header position="sticky">
      <Header.Logo>        
        <Link href="/">
          <IconText icon={<IcUI/>} fontWeight="bold"> Kint UI </IconText>
        </Link>
      </Header.Logo>

      <>
      {
      /* <Header.SearchBar>
        <Header.SearchInput
          placeholder="Search Items"
          suggestions={[
            <Suggestion key="1" value="Suggestion 1" />,
            <Suggestion key="2" value="Suggestion 2" />,
            <Suggestion key="3" value="Suggestion 3" />
          ]}          
        />
      </Header.SearchBar> */
      }
      </>

      <Header.MenuSection alignment="center">     
        <HeaderItem href="/" label="Components" />
        <HeaderItem href="/hackernews" label="Hacker news" />  
      </Header.MenuSection>

      <Header.AccountSection responsiveChild={<AccountOptions/>}>
        <DropDownView
          trigger="hover"
          view={<IconText padding="0" icon={<IcAccount />}>Account</IconText>}
          dropView={<AccountOptions/>}
          padding="0"
          viewPadding="0"
          origin="bottom-right"
        />
      </Header.AccountSection>
    </Header>
  )
};

/**
 * ACCOUNT OPTIONS
 */
const AccountOptions = () => (
  <Container padding="10px">
    <Container hasBorder borderDirections="b" highlightOnHover={false}>
      <IconText icon={<Option/>}>Sample One</IconText>
    </Container>
    <Container  highlightOnHover={false}>
      <IconText icon={<Option />}>Sample One</IconText>
    </Container>
  </Container>
)

/**
 * HEADER ITEM
 */
const HeaderItem = ({ href, label }) => (
  <Header.MenuItem hasDivider={false}>
    <Link href={href} activeClassName="active">
      <TextButton color={theme.colors.textColor}>{label}</TextButton>
    </Link>

    { /* STYLE ======================================================================================= */}
    <style jsx>{`
      :global(.MenuItem a) {
        padding: 10px 20px; 
        display: inline-block;
      }

      :global(.MenuItem .active *) {
        color: ${theme.colors.primaryColor};
        font-weight: bold;
      }
    `}</style>
  </Header.MenuItem>
);

/**
 * SEARCH SUGGESTION
 */
const Suggestion = ({value}) => {
  return (
    <Container paddingVertical="15px" paddingHorizontal="10px">
      {value}
    </Container>
  );
};


export default TestHeader;