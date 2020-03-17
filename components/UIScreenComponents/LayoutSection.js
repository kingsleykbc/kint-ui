import React from 'react';
import Container from '../UI/Container';
import PageDivider from '../UI/PageDivider';
import { Column, Row, Flex } from '../UI/Flex';
import { Text, Par } from '../UI/TextComponents';
import Exhibit from '../UI/Exhibit';
import theme from '../../config/theme';
import Spacing from '../UI/Spacing';

const LayoutSection = () => {
  return (
    <Container marginTop="20px">
      <PageDivider label="Layouts"/>

      <Column stretchChildren>
        <Exhibit label="Container">
          <Row align="flex-start">
            <Flex span={1}>
              <Container hasBorder margin="5px"> Regular Container (with border) </Container>
            </Flex>

            <Container hasBorder margin="5px" padding="25px">
              Container with padding
            </Container>

            <Container 
              hasBorder 
              margin="5px" 
              padding="35px" 
              width="300px" 
              height="150px" 
              responsivePadding="10px"
              mobileHeight="auto"
              mobileWidth="auto"
            >
              Responsive Container
              <br />
              <br />
              <Par> (New width, height, padding and margin on resize) </Par>
            </Container>

            <Container hasBorder margin="5px" padding="25px" width="220px" height="120px">
              Sized container 
              <br />
              <br />
              (260px by 120px)
            </Container>

            <Container hasShadow margin="5px" padding="25px">
              With Shadow
            </Container>

            <Container 
              margin="5px" 
              paddingVertical="25px"
              paddingHorizontal="35px" 
              borderRadius="5px" 
              background={theme.colors.primaryColor}
            >
              <Text color="#fff">Styled Container</Text>              
            </Container>

            <Container hasBorder borderDirections="l" margin="5px" padding="25px">
              With positioned border
            </Container>

            <Container hasBorder borderDirections="b" margin="5px" padding="25px">
              With positioned border
            </Container>

            <Container hasBorder borderDirections="lr" margin="5px" padding="25px">
              With positioned border
            </Container>

            <Container hasBorder borderDirections="tb" margin="5px" padding="25px">
              With positioned border
            </Container>

            <Container 
              hasBorder 
              margin="5px" 
              padding="25px" 
              paddingHorizontal="50px"
              borderWidth="2px"
              borderRadius="5px"
              borderColor={theme.colors.secondaryColor}
            >
              With Styled border
            </Container>

            <Container hasBorder onClick={()=>{}} margin="5px" padding="25px">
              Clickable Container
            </Container>
          </Row>
        </Exhibit>
      </Column>
      
      <RowSection/>

      <Container padding="5px"/>

      <Exhibit label="Column">
        <Row>
          <Flex span={1}>
            <ColumnSection/>
          </Flex>
          <Flex span={2}>
            <FlexSection/>
          </Flex>
        </Row>
      </Exhibit>

      <Spacing/>

      <Exhibit label="SidebarPage">
        PUT SIDEBAR PAGE HERE
      </Exhibit>
    </Container>
  );
};

export default LayoutSection;



const RowSection = () => {
  return (
    <Container marginTop="20px" className="RowSection" >  
      <Exhibit label="Row">
        <Container hasBorder padding="10px">
          <Container paddingBottom="10px" alignment="center">Row</Container>

          <Row wrap={false} >
            <Flex span={1}>
              <Container hasBorder padding="10px">Flex: 1</Container>
            </Flex>
            <Flex span={2}>
              <Container hasBorder marginHorizontal="10px" padding="10px">
                Flex: 2
              </Container>
            </Flex>
            <Flex span={3}>
              <Container hasBorder padding="10px">Flex: 3</Container>
            </Flex>
          </Row>
        </Container>

        <Container hasBorder padding="10px" marginTop="20px">
          <Container paddingBottom="10px" alignment="center">Responsive Row</Container>

          <Row wrap={false} responsiveCollapse>
            <Flex span={1}>
              <Container hasBorder padding="25px"> Flex</Container>
            </Flex>
            <Flex span={1}>
              <Container 
                hasBorder 
                responsiveMarginHorizontal="0" 
                responsiveMarginVertical="10px"
                marginHorizontal="10px" padding="25px"
              > Flex</Container>
            </Flex>
            <Flex span={1}>
              <Container hasBorder padding="25px"> Flex</Container>
            </Flex>
          </Row>
        </Container>
      </Exhibit>
    </Container>
  );
};



const ColumnSection = () => {
  return (
    <div>
      <Container hasBorder padding="10px">
        <Container paddingBottom="10px" alignment="center"> Column </Container>
        <Column>
          <Container hasBorder padding="25px"> Aligned Flex </Container>
          <Flex crossSpan="flex-end">
            <Container hasBorder padding="25px" marginTop="10px" > Aligned Flex </Container>
          </Flex>
        </Column>
      </Container>

      <Container hasBorder padding="10px" marginTop="15px" height="250px">
        <Container paddingBottom="10px" alignment="center"> Column with specified Height </Container>
        <Column height="calc(100% - 30px)">
          <Flex span={1}>            
            <Container height="100%" hasBorder padding="25px"> Flex (span: 1)</Container>
          </Flex>
          <Flex>
            <Container hasBorder padding="25px" marginTop="10px"> Flex </Container>
          </Flex>
        </Column>
      </Container>
    </div>
  );
};


const FlexSection = () => (
  <Container hasBorder borderColor={theme.colors.primaryColor} padding="10px" marginLeft="10px" responsiveMarginLeft="0">
    <Container paddingBottom="10px" alignment="center" borderColor> Column  </Container>
    <Column stretchChildren fillHeight>
      <Container hasBorder padding="25px"> 
        <Flex>Flex</Flex>
      </Container>
    
      <Container hasBorder marginTop="10px" padding="10px" height="255px"> 
        <Container paddingBottom="10px" alignment="center"> Row  </Container>
        <Row align="stretch" height="calc(100% - 30px)">
          <Flex>
            <Container height="100%" hasBorder padding="10px"> Flex (span: 1)</Container>
          </Flex>

          <Flex span={1}>
            <Container height="100%" hasBorder marginLeft="10px" padding="10px"> Flex (span: 2) </Container>
          </Flex>
        </Row>
      </Container>

      <Container hasBorder padding="25px" marginTop="10px"> Flex </Container>

    </Column>
  </Container>
)