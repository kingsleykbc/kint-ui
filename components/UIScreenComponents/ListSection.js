import React from 'react';
import Container from '../UI/Container';
import PageDivider from '../UI/PageDivider';
import {Row, Flex} from '../UI/Flex';
import Exhibit from '../UI/Exhibit';
import ListItem from '../UI/ListItem';
import IcMail from 'react-icons/lib/md/email'
import theme from '../../config/theme';

const ListSection = () => {
  return (
    <Container marginTop="15px">
      <PageDivider label="Lists"/>

      <Row>
        <Flex span={1}> <ListItemSection /> </Flex>
      </Row>
      <Row>
        <Flex span={1}> <KeyValueListSection /> </Flex>
        <TableListSection/>
      </Row>
    </Container>
  );
};

export default ListSection;


const ListItemSection = () => (
  <Container>
    <Exhibit label="ListItem">
      <Row>
        <Flex span={1}>
          <ListItem title="Basic list 1" subTitle="Basic subtitle 1" />
          <ListItem title="Basic list 2" subTitle="Basic subtitle 2" />
          <ListItem title="Basic list 3" subTitle="Basic subtitle 3" />
        </Flex>

        <Flex span={1}>
          <Container marginLeft="10px">
            <ListItem
              icon={<IcMail/>}
              title="With icon and go button 1"
              subTitle="Icon subtitle 1"
              hasGoButton
              onClick={() => { alert("cs") }}
            />
            <ListItem
              icon={<IcMail/>}
              title="With icon and go button 2"
              subTitle="Icon subtitle 2"
              hasGoButton
              onClick={() => { alert("cs") }}
            />
            <ListItem
              icon={<IcMail/>}
              iconColor={theme.colors.secondaryColor}
              title="With styled icon and go button"
              subTitle="Icon subtitle 3"
              hasGoButton
              onClick={() => { alert("cs") }}
            />
          </Container>
        </Flex>

      </Row>
    </Exhibit>
  </Container>
);


const KeyValueListSection = () => {
  return (
    <div className="listItem">KEY VAL ITEM</div>
  );
}

const TableListSection = () => (
  <div className="listItem">LIST ITEM</div>
);