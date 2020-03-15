import React from 'react';
import Container from '../UI/Container';
import PageDivider from '../UI/PageDivider';
import {Row, Flex} from '../UI/Flex';
import Exhibit from '../UI/Exhibit';
import ListItem from '../UI/ListItem';
import IcMail from 'react-icons/lib/md/email';
import theme from '../../config/theme';
import IcAccount from 'react-icons/lib/md/account-circle';
import TableList from '../UI/TableList';
import KeyValListItem from '../UI/KeyValListItem';
import DividedText from '../UI/DividedText';


const ListSection = () => {
  return (
    <Container marginTop="15px">
      <PageDivider label="Lists"/>

      <Row>
        <Flex span={1}> <ListItemSection /> </Flex>
      </Row>

      <Container padding="5px"/>

      <Row responsiveCollapse>
        <Flex span={1}> <KeyValueListSection /> </Flex>
        <Flex span={1}> <TableListSection /> </Flex>
      </Row>
    </Container>
  );
};

export default ListSection;


const ListItemSection = () => (
  <Container>
    <Exhibit label="ListItem">
      <Row responsiveCollapse>
        <Flex span={1} basis="35%">
          <Container>
            <ListItem title="Basic list 1" subTitle="Basic subtitle 1" />
            <ListItem title="Basic list 2" subTitle="Basic subtitle 2" />
            <ListItem 
              title="Basic list 3" 
              subTitle="Styled basic subtitle" 
              subTitleColor={theme.colors.textColor} 
              titleColor={theme.colors.lightText}
            />
          </Container>
        </Flex>

        <Flex span={1} basis="40%">
          <Container marginLeft="15px" responsiveMarginLeft="0">
            <ListItem
              icon={<IcMail/>}
              title="With icon and go button 1"
              subTitle="Also clickable 1"
              hasGoButton
              onClick={() => { console.log("clicked") }}
            />

            <ListItem
              icon={<IcMail/>}
              title="With icon and go button 2"
              subTitle="Also clickable 2"
              hasGoButton
              onClick={() => { console.log("clicked") }}
            />

            <ListItem
              icon={<IcMail/>}
              iconColor={theme.colors.secondaryColor}
              title="With styled icon and go button"
              subTitle="Also clickable 3"
              hasGoButton
              onClick={() => { console.log("clicked") }}
            />
          </Container>
        </Flex>
      </Row>

      <Container padding="10px"/>
      <Row responsiveCollapse>
        <Flex span={1} basis="35%">
          <Container>
            <ListItem
              hasShadow
              growOnHover
              title="With shadow and go button 1"
              subTitle="Also clickable and transform animation."
              hasGoButton
              onClick={() => { console.log("clicked") }}
            />

            <ListItem
              hasShadow
              growOnHover
              title="With shadow and go button 2"
              subTitle="Also clickable and transform animation."
              hasGoButton
              onClick={() => { console.log("clicked") }}
            />

            <ListItem
              hasShadow
              growOnHover
              iconColor={theme.colors.secondaryColor}
              title="With shadow and go button 3"
              subTitle="Also clickable and transform animation."
              hasGoButton
              onClick={() => { console.log("clicked") }}
            />
          </Container>
        </Flex>

        <Flex span={1} basis="40%">
          <Container marginLeft="15px" responsiveMarginLeft="0">
            <ListItem
              iconSize="2rem"
              title="With buttom widgets 1"
              subTitle="Icon subtitle 1"
              hasGoButton
              onClick={() => { console.log("clicked") }}
              bottomLeft={"Left Item"}
              icon={<IcAccount/>}
            />

            <ListItem
              iconSize="2rem"
              title="With buttom widgets 2"
              subTitle="Icon subtitle 2"
              hasGoButton
              onClick={() => { console.log("clicked") }}
              bottomRight={"Right Item"}
              icon={<IcAccount/>}
            />

            <ListItem
              iconSize="2rem"
              title="With styled icon and go button"
              subTitle="Icon subtitle 3"
              hasGoButton
              onClick={() => { console.log("clicked") }}
              bottomLeft={"Left Item"}
              bottomRight={"Right Item"}
              icon={<IcAccount/>}
            />
          </Container>
        </Flex>
      </Row>
    </Exhibit>
  </Container>
);


const KeyValueListSection = () => {
  const data =  [
    {
      First: "First val 1",
      Second: "Second val 1",
      Third: "Third val 1",
      Fourth: "Fourth val 1",
      Fifth: "Fifth val 1"
    },
    {
      First: "first val 2",
      Second: "second val 2",
      Third: "Third val 2",
      Fourth: "Fourth val 2",
      Fifth: "Fifth val 2",
    },
    {
      First: "first val 3",
      Second: "second val 3",
      Third: "Third val 3",
      Fourth: "Fourth val 3",
      Fifth: "Fifth val 3"
    },
    {
      First: "first val 4",
      Second: "second val 4",
      Third: "Third val 4",
      Fourth: "Fourth val 4",
      Fifth: "Fifth val 4"
    }
  ];

  return (
      <Exhibit  label="TableListItem">
        <TableList data={data} mobileKeys={["first", "third"]} />
      </Exhibit>
  );
}

const TableListSection = () => (
    <Exhibit label="KeyValListItem">
      <KeyValListItem item="key 1" value="value 1" />
      <KeyValListItem item="key 2" value="value 2" />
      <KeyValListItem 
        item="Styled key" 
        itemColor={theme.colors.primaryColor} 
        valueFontWeight="normal"
        value="value" 
      />

      <br/><br/>

      <KeyValListItem item="key 4" value={
        <input type="text" placeholder="value 4"/>
      } />
      <KeyValListItem item="key 5" value={
        <DividedText items={["value","5"]} />
      } />

    </Exhibit>
);