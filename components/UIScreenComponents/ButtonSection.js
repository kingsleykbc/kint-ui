import React,{useState} from 'react';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import { Row, Flex, Column } from '../UI/Flex';
import {Text} from '../UI/TextComponents';
import Button from '../UI/Button';
import Container from '../UI/Container';
import theme from '../../config/theme';

import IcPower from 'react-icons/lib/md/power-settings-new';
import DotLoader from '../UI/DotLoader';
import CircularLoader from '../UI/CircularLoader';
import ClickableIcon from '../UI/ClickableIcon';
import TextButton from '../UI/TextButton';

const ButtonSection = () => {
  const [isLoading, setisLoading] = useState(false);

  return (
    <div className="ButtonSection">
      <PageDivider label="Buttons and Clickables"/>
      <Row>
        <Flex span={1}>
          <Exhibit label="Button">
            <Row>
              <Container padding="5px">
                <Button label="Button"/>
              </Container>
              <Container padding="5px">
                <Button label="Rounded Button" rounded />
              </Container>
              <Container >
                <Button label="Colored text Button" textColor={theme.colors.textColor}/>
              </Container>
            </Row>
            <Container padding="5px"/>

            <Row>
              <Container padding="5px">
                <Button label="Filled Button" filled />
              </Container>
              <Container padding="5px">
                <Button label="Shadow Button" filled hasShadow />
              </Container>
            </Row>
            <Container padding="5px" />

            <Row>
              <Container padding="5px">
                <Button label="Colored Button" color={theme.colors.secondaryColor} />
              </Container>
              <Container padding="5px">
                <Button label="Custom Radius Button" borderRadius="0" color={theme.colors.secondaryColor} />
              </Container>
              <Container padding="5px">
                <Button label="Filled Colored Button" color={theme.colors.secondaryColor} filled />
              </Container>
            </Row>
            <Container padding="5px" />

            <Row>
              <Container padding="5px">
                <Button label="Hover Colored Button" hoverColor={theme.colors.secondaryColor}/>
              </Container>
              <Flex span={1}>
                <Container padding="5px">
                  <Button width="100%" label="Sized Button" filled />
                </Container>
              </Flex>
            </Row>

            <PageDivider label="Animation Direction"/>
            <Row>
              <Container padding="5px">
                <Button label="Right" slideDirection="right"/>
              </Container>
              <Container padding="5px">
                <Button label="Left" slideDirection="left" />
              </Container>
              <Container padding="5px">
                <Button label="Top" slideDirection="top" />
              </Container>
              <Container padding="5px">
                <Button label="Bottom" slideDirection="bottom" />
              </Container>
            </Row>

            <PageDivider label="With Icon" />

            <Row>
              <Container padding="5px">
                <Button icon={<IcPower/>} label="Leading" />
              </Container>
              <Container padding="5px">
                <Button icon={<IcPower />} label="Trailing" iconPosition="right"/>
              </Container>
              <Container padding="5px">
                <Button icon={<IcPower />} label="Colored Icon Button" iconColor={theme.colors.secondaryColor} />
              </Container>
              <Container padding="5px">
                <Button icon={<IcPower />}/>
              </Container>
              <Container padding="5px">
                <Button icon={<IcPower />} rounded />
              </Container>
              <Container padding="5px">
                <Button icon={<IcPower />} rounded hasShadow filled />
              </Container>
            </Row>

            <PageDivider label="Button States" />
            <Row>
              <Container padding="5px">
                <Button icon={<IcPower />} isLoading label="Loading Button" />
              </Container>
              
              <Container padding="5px">
                <Button icon={<IcPower />} isLoading label="Loading Button" showTextOnLoad/>
              </Container>

              <Container padding="5px">
                <Button icon={<IcPower />} onClick={() => setisLoading(true)} isLoading={isLoading} label="Click to Load" />
              </Container>
            </Row>

            <Container padding="5px"/>

            <Row>
              <Container padding="5px">
                <Button icon={<IcPower />} label="Disabled Button" disabled />
              </Container>
              <Container padding="5px">
                <Button icon={<IcPower />} label="Disabled Filled Button" disabled filled />
              </Container>
            </Row>
          </Exhibit>
        </Flex>

        {/* ICON BUTTONS */}
        <Column span={1}>
          <Flex>
            <Exhibit label="ClickableIcon">
              <Column>
                <Row>
                  <ClickableIcon icon={<IcPower/>}/>
                  <Container padding="5px"/>
                  <Text>Icon Button</Text>
                </Row>

                <Container padding="5px" />

                <Row>
                  <ClickableIcon icon={<IcPower />} highlightBackground={false} color={theme.colors.secondaryColor}  />
                  <Container padding="5px" />
                  <Text>Colored and no Highlight</Text>
                </Row>

                <Container padding="5px" />

                <Row>
                  <ClickableIcon icon={<IcPower />} hasBorder />
                  <Container padding="5px" />
                  <Text>With border</Text>
                </Row>

                <Container padding="5px" />

                <Row>
                  <ClickableIcon icon={<IcPower />} hasBorder borderColor={theme.colors.textColor} />
                  <Container padding="5px" />
                  <Text>With styled border</Text>
                </Row>

                <Container padding="5px" />

                <Row>
                  <ClickableIcon icon={<IcPower />} filled />
                  <Container padding="5px" />
                  <Text>Filled</Text>
                </Row>
              </Column>
            </Exhibit>
          </Flex>

          <Container padding="5px"/>

          <Flex span={1}>
            <Exhibit label="TextButton">
              <Container paddingBottom="15px">
                This is a <TextButton>text Button</TextButton>.
              </Container>
              <Container paddingBottom="15px">
                This is a <TextButton fontWeight="bold"> bold text Button</TextButton>.
              </Container>
              <Container paddingBottom="15px">
                This is a <TextButton color={theme.colors.secondaryColor}>colored text button</TextButton>.
              </Container>
              <Container paddingBottom="15px">
                This is a <TextButton fontStyle="italic">styled text button</TextButton>.
              </Container>
              
            </Exhibit>
          </Flex>
        </Column>

      </Row>
    </div>
  );
};

export default ButtonSection;