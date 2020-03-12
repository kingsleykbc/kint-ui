import React from 'react';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import { Row, Flex, Column } from '../UI/Flex';
import {Text, IconText, Par} from '../UI/TextComponents';
import theme from '../../config/theme';
import Container from '../UI/Container';


import Icon from 'react-icons/lib/md/center-focus-strong';
import Icon2 from 'react-icons/lib/md/cached';
import DividedText from '../UI/DividedText';

const TextSection = () => {
  return (
    <div>
      <PageDivider label="Text" />

      <Column stretchChildren>
        <Row>
          
          {/* TEXT */}
          <Flex span={2}>
            <Exhibit label="Text">
              <Container paddingBottom="10px">
                <Text fontSize="1.5rem">Sized Large</Text>
              </Container>

              <Container paddingBottom="10px">
                <Text fontSize="1.2rem" fontWeight="bold">Sized text with font-weight</Text>
              </Container>

              <Container paddingBottom="10px">
                <Text color={theme.colors.secondaryColor}>Colored Text</Text>
              </Container>

              <Container paddingBottom="10px">
                <Text fontStyle="italic">Styled Text</Text>
              </Container>

              <Container paddingBottom="10px">
                <Text fontFamily="Times new Roman">Customized Text</Text>
              </Container>

              <Container paddingBottom="10px">
                <Text>Regular Text</Text>
              </Container>

              <Container paddingBottom="10px">
                <Text slicedAt={45}>Sliced text that cuts after the value is specified and more</Text>
              </Container>
            </Exhibit>
          </Flex>

          {/* ICON TEXT */}
          <Flex span={1} shrink={0}>
            <Exhibit label="IconText">
              <Row align="flex-start" responsiveCollapse >
                <div>
                  <IconText icon={<Icon />} fontSize="1.5rem">Sized Large</IconText>
                  <br/>
                  <IconText icon={<Icon />} iconSize="2rem">Sized Icon</IconText>
                  <br />
                  <IconText icon={<Icon />} iconColor={theme.colors.secondaryColor}>Colored Icon</IconText>
                  <br />
                  <IconText icon={<Icon />} fontStyle="italic">Styled Text</IconText>
                </div>

                <Container marginLeft="10px" responsiveMarginLeft="0">
                  <IconText icon={<Icon />} iconBack={<Icon2/>} >Dual Icons</IconText>
                  <br />
                  <IconText icon={<Icon />} iconBack={<Icon2 />} iconBackSize="2rem">Dual Sized Icon</IconText>
                  <br />
                  <IconText iconBack={<Icon2 />}>Trailing only Icon</IconText>
                </Container>
              </Row>
            </Exhibit>
          </Flex>
        </Row>

        <Row wrapOnlyResponsive>
          <Flex> 
            {/* PARAGRAPH */}
            <Exhibit label="Par" marginVertical="20px">
              <Par>
                My name is Kingsley, and this is a random string to showcase the <b> {"<Par/>"} </b> component. In this component,
                can adjust all the attributes of the text, like in the <b>{"<Text/>"}</b> component, as well as set the line height,
                and wrap behaviour.
              </Par>
            </Exhibit>
          </Flex>

          <Flex span={1} shrink={0}>
            {/* PARAGRAPH */}
            <Exhibit label="DividedText" marginVertical="20px">
              <DividedText items={["These", "are", "divided", "Texts"]} />
              <DividedText items={["These", "are", <Text color={theme.colors.primaryColor} fontWeight="bold">Custom</Text>, "divided", "Texts"]} />
              <DividedText items={["These", "are", <h3>Divided</h3>, "widgets", <Icon2/>]} />
            </Exhibit>
          </Flex>
        </Row>
      </Column>     

      <br/><br/> 
    </div>
  );
};

export default TextSection;