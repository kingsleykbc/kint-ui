import React,{useState} from 'react';
import Link from './UI/Link';
import theme from '../config/theme';
import Header from './UI/Header';
import DropDownView from './UI/DropDownView';
import Container from './UI/Container';
import { IconText } from './UI/TextComponents';

import IcAccount from 'react-icons/lib/md/person';
import IcDown from 'react-icons/lib/md/keyboard-arrow-down';
import Option from 'react-icons/lib/md/flag';
import { Column } from './UI/Flex';

const TestHeader = () => {
  return (
    <Header position="sticky">
      <Header.Logo>
        <Link href="/">LOGO</Link>
      </Header.Logo>

      <Header.SearchBar>
        <Header.SearchInput
          placeholder="Search Items"
          suggestions={[
            <Suggestion key="1" value="Suggestion 1" />,
            <Suggestion key="2" value="Suggestion 2" />,
            <Suggestion key="3" value="Suggestion 3" />
          ]}          
        />
      </Header.SearchBar>

      <Header.MenuSection>
        <HeaderItem href="/" label="Home" />
        <HeaderItem href="/ui" label="Custom UI" />  
      </Header.MenuSection>

      <Header.AccountSection responsiveChild={<AccountOptions/>}>
        <DropDownView
          trigger="hover"
          view={
            <IconText icon={<IcAccount />} iconBack={<IcDown />} iconBackColor={theme.colors.lightestText}> Account </IconText>
          }
          dropView={<AccountOptions/>}
          padding="0"
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
    <Container hasBorder borderDirections="b" onClick={()=> alert("sude")} highlightOnHover={false}>
      <IconText icon={<Option/>}>Sample One</IconText>
    </Container>
    <Container onClick={() => alert("sude")} highlightOnHover={false}>
      <IconText icon={<Option />}>Sample One</IconText>
    </Container>
  </Container>
)

/**
 * HEADER ITEM
 */
const HeaderItem = ({ href, label }) => (
  <Header.MenuItem>
    <Link href={href} activeClassName="active">
      <Container> {label} </Container>
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