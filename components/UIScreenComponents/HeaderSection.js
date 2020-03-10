import React from 'react';
import Container from '../UI/Container';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import theme from '../../config/theme';
import Header from '../UI/Header';
import TextButton from '../UI/TextButton';
import { IconText } from '../UI/TextComponents';
import Icon from 'react-icons/lib/md/assistant-photo';

const HeaderSection = () => {
  return (
   <Container marginVertical="10px">
     <PageDivider label="Navigation"/>

    <Exhibit label="Header" background={theme.colors.faintColor} contentPadding="20px">

      {/* REGULAR HEADER */}
      <Header position="static">
        <Header.Logo>Basic Header</Header.Logo>

        <Header.MenuSection alignment="center">
          <TextButton padding="10px" color={theme.colors.textColor}>Item 1</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 2</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 3</TextButton>
        </Header.MenuSection>

        <Header.AccountSection>
          <IconText icon={<Icon/>}>
            Edge Button
          </IconText>
        </Header.AccountSection>
      </Header>

      <Container padding="15px"/>

      {/* WITH SEARCH BAR HEADER */}
      <Header position="static">
        <Header.Logo>With Searchbar</Header.Logo>

        <Header.SearchBar>
          <Header.SearchInput
            placeholder="Search Items"
            suggestions={[]}
          />
        </Header.SearchBar>

        <Header.MenuSection responsiveCollapse="1000px" >
          <TextButton padding="10px" color={theme.colors.textColor}>Item 1</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 2</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 3</TextButton>
        </Header.MenuSection>

        <Header.AccountSection responsiveCollapse="1000px" >
          <IconText icon={<Icon />}>
            Edge Button
          </IconText>
        </Header.AccountSection>
      </Header>

      <Container padding="15px" />

      {/* WITH SEARCH BAR HEADER */}
      <Header position="static">
        <Header.Logo>Sized Searchbar</Header.Logo>

        <Header.SearchBar>
          <Header.SearchInput
          maxWidth="250px"
            placeholder="Search Items"
            suggestions={[]}
          />
        </Header.SearchBar>

        <Header.MenuSection responsiveCollapse="1000px" >
          <TextButton padding="10px" color={theme.colors.textColor}>Item 1</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 2</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 3</TextButton>
        </Header.MenuSection>

        <Header.AccountSection responsiveCollapse="1000px" >
          <IconText icon={<Icon />}>
            Edge Button
        </IconText>
        </Header.AccountSection>
      </Header>

      <Container padding="15px" />


      {/* COLORED HEADER */}
      <Header position="static">
        <Header.Logo>Aligned Searchbar</Header.Logo>

        <Header.SearchBar alignment="right">
          <Header.SearchInput
            maxWidth="250px"
            placeholder="Search Items"
            suggestions={[]}
          />
        </Header.SearchBar>

        <Header.MenuSection responsiveCollapse="1000px" >
          <TextButton padding="10px" color={theme.colors.textColor}>Item 1</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 2</TextButton>
          <TextButton padding="10px" color={theme.colors.textColor}>Item 3</TextButton>
        </Header.MenuSection>

        <Header.AccountSection responsiveCollapse="1000px" >
          <IconText icon={<Icon />}>
            Edge Button
      </IconText>
        </Header.AccountSection>
      </Header>

      <Container padding="15px"/>

        {/* WITH SEARCH BAR HEADER */}
        <Header position="static" color={theme.colors.secondaryColor}>
          <Header.Logo>Colored Header</Header.Logo>

          <Header.SearchBar alignment="left">
            <Header.SearchInput
              maxWidth="250px"
              placeholder="Search Items"
              suggestions={[]}
            />
          </Header.SearchBar>

          <Header.MenuSection responsiveCollapse="1000px" >
            <TextButton padding="10px" color={theme.colors.textColor}>Item 1</TextButton>
            <TextButton padding="10px" color={theme.colors.textColor}>Item 2</TextButton>
            <TextButton padding="10px" color={theme.colors.textColor}>Item 3</TextButton>
          </Header.MenuSection>

          <Header.AccountSection responsiveCollapse="1000px" >
            <IconText icon={<Icon />}>
              Edge Button
      </IconText>
        </Header.AccountSection>
      </Header>


    </Exhibit>
   </Container>
  );
};

export default HeaderSection;