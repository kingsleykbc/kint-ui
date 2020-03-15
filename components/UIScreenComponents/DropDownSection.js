import React from 'react';
import PageDivider from '../UI/PageDivider';
import Container from '../UI/Container';
import { Row, Flex } from '../UI/Flex';
import Exhibit from '../UI/Exhibit';
import DropDownView from '../UI/DropDownView';
import { Par } from '../UI/TextComponents';
import DropOptions from '../UI/DropOptions';
import IcCloud from 'react-icons/lib/md/cloud-queue';
import theme from '../../config/theme';

const DropDownSection = () => {
  return (
    <Container paddingVertical="20px">
      <PageDivider label="Drop downs"/>
      
      <Row>
        <Flex span={1}>

          {/* REGULAR DROPDOWN */}
          <Exhibit label="DropDownView">
            <DropDownView
              view={<Container>Basic dropdown</Container>}
              dropView={<DropItem/>}
            />
            <DropDownView
              view={<Container>Hover dropdown</Container>}
              trigger="hover"
              dropView={<DropItem />}
            />
            <DropDownView
              view={<Container>With backdrop dropdown</Container>}
              dropView={<DropItem />}
              hasBackdrop
            />
            <PageDivider label="Directions"/>
            <Container>
              <Row>
                <DropDownView
                  width="50%"
                  view={<Container>Bottom Left</Container>}
                  dropView={<DropItem />}
                  origin="bottom-left"
                />

                <DropDownView
                  width="50%"
                  view={<Container>Bottom Right</Container>}
                  dropView={<DropItem />}
                  origin="bottom-right"
                />
              </Row>

              <br />

              <Row>
                <DropDownView
                  width="50%"
                  view={<Container>Top Light</Container>}
                  dropView={<DropItem />}
                  origin="top-left"
                />

                <DropDownView
                  width="50%"
                  view={<Container>Top Right</Container>}
                  dropView={<DropItem />}
                  origin="top-right"
                />
              </Row>

              <br />

              <DropDownView
                width="100%"
                view={<Container>Match Width</Container>}
                dropView={<DropItem />}
                matchWidth
              />
            </Container>

          </Exhibit>
        </Flex>


        {/* DROP OPTIONS */}
        <Flex span={1}>
          <Exhibit label="DropOptions">
            <DropOptions
              view="Basic drop option"
              options={options}
            />

            <Container padding="5px"/>

            <DropOptions
              trigger="hover"
              view="Hover drop option"
              options={options}
            />

            <Container padding="5px" />

            <DropOptions
              view="With success and danger options"
              options={withSuccessAndDanger}
            />
            
            <Container padding="5px" />

            <DropOptions
              view="With styled options"
              options={styledOptions}
              iconColor={theme.colors.secondaryColor}
              color={theme.colors.primaryColor}
            />

            <Container padding="5px" />

            <DropOptions
              view="With styled and overriden options"
              options={styledOveriddenOptions}
              iconColor={theme.colors.secondaryColor}
            />
          </Exhibit>
        </Flex>
      </Row>
    </Container>
  );
};

/**
 * DROP OPTIONS
 */
const options = [
  { icon: (<IcCloud/>), label: "Option 1", onClick: () => {} },
  { icon: (<IcCloud />), label: "Option 2", onClick: () => {} },
  { icon: (<IcCloud />), label: "Option 3", onClick: () => {} },
];

const withSuccessAndDanger = [
  { icon: (<IcCloud />), label: "Success Option", onClick: () => {}, type: "success" },
  { icon: (<IcCloud />), label: "Danger Option", onClick: () => {}, type: "danger" }
]

const styledOptions = [
  { icon: (<IcCloud />), label: "Option 1", onClick: () => {} },
  { icon: (<IcCloud />), label: "Option 3", onClick: () => {} },
  { icon: (<IcCloud />), label: "Option 3", onClick: () => {} },
];

const styledOveriddenOptions = [
  { icon: (<IcCloud />), label: "Option 1", onClick: () => {} },
  { icon: (<IcCloud />), label: "Option 3", onClick: () => {}, color: theme.colors.secondaryColor },
  { icon: (<IcCloud />), label: "Option 3", onClick: () => {} },
];


/**
 * DROP ITEM
 */
const DropItem= () => (
  <Container padding="5px">
    <Par>Yhis is the hidden item triggered by the dropdown view.</Par>
    <hr/>
    You can place <b>any DOM element</b> here.
  </Container>
);

export default DropDownSection;