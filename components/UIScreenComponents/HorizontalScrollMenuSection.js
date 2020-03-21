import React from 'react';
import HorizontalScrollView from '../UI/HorizontalScrollView';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import Container from '../UI/Container';
import { Column, Row } from '../UI/Flex';
import IcItem from 'react-icons/lib/md/adb';
import Spacing from '../UI/Spacing';
import theme from '../../config/theme';
import {Text} from '../UI/TextComponents';

const Items = ({ isRounded }) => <Row wrap={false}>
  <ScrollItem label="First Item" isRounded={isRounded} />
  <ScrollItem label="Second Item" isRounded={isRounded} />
  <ScrollItem label="Third Item" isRounded={isRounded} />
  <ScrollItem label="Fourth Item" isRounded={isRounded} />
  <ScrollItem label="Fifth Item" isRounded={isRounded} />
  <ScrollItem label="Sixth Item" isRounded={isRounded} />
  <ScrollItem label="Seventh Item" isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem label="Middle Item" isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem isRounded={isRounded} />
  <ScrollItem label="Last Item" isRounded={isRounded} />
</Row>

const HorizontalScrollViewSection = () => {

  return (
    <div>
      <Spacing/>
      
      <PageDivider label="Horizontal Scroll Menu"/>

      <Exhibit label="HorizontalScrollView">

        <HorizontalScrollView> <Items/> </HorizontalScrollView>

        <PageDivider label="With custom scroll width and background"/>
 
        <HorizontalScrollView scrollWidth={200} backgroundColor={theme.colors.highlightColor}> <Items isRounded /> </HorizontalScrollView>

      </Exhibit>
    </div>
  );
};

export default HorizontalScrollViewSection;


/**
 * SCROLL ITEM
 */
const ScrollItem = ({label = "Item", isRounded}) => {
  return (
    <Container 
      padding="25px" 
      borderRadius= "5px"
      minWidth="120px" margin="5px" 
      hasBorder = {!isRounded}
      hasShadow= {isRounded}
      background={theme.colors.backgroundColor}
    >
      <Column justify="center">
        <div className="same">
         <IcItem/>
        </div>
        <Spacing/>
        <Text fontWeight="bold" color={theme.colors.lightText}>{label}</Text>
      </Column>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .same {
          font-size: 2.1em;
        }

        .same :global(*){
          color: ${theme.colors.primaryColor};
        }
      `}</style>

    </Container>
  );
};
