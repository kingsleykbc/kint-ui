import React from 'react';
import Container from '../UI/Container';
import Exhibit from '../UI/Exhibit';
import TabbedView from '../UI/TabbedView';
import theme from '../../config/theme';
import { Row, Column, Flex } from '../UI/Flex';
import TabSwitch from '../UI/TabSwitch';

const NavigationSection = () => {
  return (
    <Container marginTop="20px" marginVertical="15px">
      <Row>
        <Flex span={1}>
          <Exhibit label="TabbedView" background={theme.colors.faintColor}>
            <Container hasShadow> 
              <TabbedView 
                label1="Tab 1" label2="Tab 2" label3="Tab 3" label4="Tab 4" view1="View 1" view4="View 4"
                view2="View 2" view3="View 3" viewPadding="20px" minHeight="80px"
              />
            </Container>

            <Container hasShadow marginTop="10px">
              <TabbedView
                tabsShadow
                label1="Shadow Tab 1" label2="Shadow Tab 2" label3="Shadow Tab 3" view1="View 1 with"
                view2="View 2" view3="View 3" viewPadding="20px" minHeight="80px"
              />
            </Container>

            <Container hasShadow marginTop="10px">
              <TabbedView
                activeFontWeight="normal" activeBorderColor={theme.colors.secondaryColor}
                label1="Styled Tab 1" label2="Styled Tab 2" label3="Styled Tab 3" view1="View 1 with"
                view2="View 2" view3="View 3" viewPadding="20px" minHeight="80px" activeColor={theme.colors.primaryColor}
              />
            </Container>
          </Exhibit>
        </Flex>

        <Flex span={1}>
          <Exhibit label="TabSwitch">
            <TabSwitch tabs={['Switch 1', "Switch 2", "Switch 3"]} />

            <Container padding="10px"/>

            <TabSwitch 
              tabs={['Custom switch 1', "Custom switch 2", "Custom switch 3"]} 
              switchColor={theme.colors.primaryColor}
              activeColor="#fff"
              activeFontWeight="bold"
            />

            <Container padding="10px" />

            <TabSwitch 
              backgroundColor={theme.colors.primaryColor} 
              tabs={['Custom switch 1', "Custom switch 2", "Custom switch 3"]} 
              color="#fff"
              dividerColor="rgba(0,0,0,0.15)"
              padding="1px"
              activeColor={theme.colors.primaryColor}
              activeFontWeight="bold"
            />

          </Exhibit>
        </Flex>        
      </Row>
    </Container>
  );
};

export default NavigationSection;