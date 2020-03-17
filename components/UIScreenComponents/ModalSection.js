import React,{useState, useRef} from 'react';
import Exhibit from '../UI/Exhibit';
import { Row, Flex, Column } from '../UI/Flex';
import PageDivider from '../UI/PageDivider';
import Spacing from '../UI/Spacing';
import Container from '../UI/Container';
import Lightbox from '../UI/Lightbox';
import Button from '../UI/Button';
import { Par } from '../UI/TextComponents';
import AreYouSureBox from '../UI/AreYouSureBox';
import Drawer from '../UI/Drawer';
import theme from '../../config/theme';

const ModalSection = () => {
  return (
    <div>
      <PageDivider label="Modal Section"/>
      <Row>
        <Flex span={1}>
          <Exhibit label="LightBox"><LightBoxSection /></Exhibit>
        </Flex>
        <Flex span={1}>
          <Exhibit label="Drawer"><DrawerSection /></Exhibit>
        </Flex>
      </Row>

      <Spacing />

      <Row>
        <Flex span={1}>
          <Exhibit label="AreYouSureBox">
            <AreYouSureSection/>
          </Exhibit>
        </Flex>
        <Column fillHeight span={1}>
          <Flex span={1}>
            <Exhibit label="Snackbar"><SnackBarSection /></Exhibit>
          </Flex>
          <Flex span={1}>
            <Exhibit label="Tooltip"><ToolTipSection /></Exhibit>
          </Flex>
        </Column>
      </Row>

      <Spacing />
      <Spacing />

    </div>
  );
};

export default ModalSection;


/**
 * LIGHTBOX SECRTOPN
 */
const LightBoxSection = () => {
  const [showLB1, setshowLB1] = useState(false);
  const [showLB2, setshowLB2] = useState(false);
  const [showLB3, setshowLB3] = useState(false);
  const [showLB4, setshowLB4] = useState(false);

  const toggleLB1 = () => setshowLB1(!showLB1);
  const toggleLB2 = () => setshowLB2(!showLB2);
  const toggleLB3 = () => setshowLB3(!showLB3);
  const toggleLB4 = () => setshowLB4(!showLB4);


  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div>
      <Container hasBorder borderDirections="b" paddingVertical="10px">
        <Row justify="space-between">
          <span>Basic Lightbox</span>
          <Button label="Open" onClick={toggleLB1}/>
        </Row>
      </Container>
      <Container hasBorder borderDirections="b" paddingVertical="10px">
        <Row justify="space-between">
          <span>With title and bottom actions</span>
          <Button label="Open" onClick={toggleLB2}/>
        </Row>
      </Container>
      <Container hasBorder borderDirections="b" paddingVertical="10px">
        <Row justify="space-between">
          <span>With auto width Height</span>
          <Button label="Open" onClick={toggleLB3} />
        </Row>
      </Container>
      <Container  paddingVertical="10px">
        <Row justify="space-between">
          <span>Fixed Lightbox (with custom size)</span>
          <Button label="Open" onClick={toggleLB4}/>
        </Row>
      </Container>

      
      <Lightbox show={showLB1} toggle={toggleLB1}> Basic lightbox </Lightbox>

      <Lightbox 
        fullScreenInResponsive
        show={showLB2} 
        toggle={toggleLB2} 
        title="Lightbox Title"
        bottomActions={[
          <Button label="Action 1" />,
          <Button label="Action 2" filled />
        ]}
      > 
        <p>
          Lightbox with <b>title</b>, and <b>bottom actions</b>.
        </p>
      </Lightbox>

      <Lightbox show={showLB3} toggle={toggleLB3} autoHeight autoWidth showCancelButton={false}> 
        Lightbox with auto width and height.
      </Lightbox>

      <Lightbox show={showLB4} toggle={toggleLB4} isFixed width="400px" height="600px">
        Fixed Lightbox (with custom size)
        <br />
        <br />
        <Button slideDirection="bottom" label="Only way to close Box" onClick={toggleLB4}/>
      </Lightbox>
    </div>
  )
}

/**
 * LIGHTBOX SECRTOPN
 */
const AreYouSureSection = () => {
  const lbRef = useRef(null);
  const handleAlert = () => lbRef.current.openAreYouSureBox({
    message: "You are about to display a browser alert.",
    onYes: ()=> alert("Alert Message!")
  });

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div>
      <Par> Click the button below to perform an action. </Par>
      <Spacing padding="20px 0">
        <Button onClick={handleAlert}>Show alert box</Button>
      </Spacing>

      <AreYouSureBox ref={lbRef} />      
    </div>
  )
}

/**
 * LIGHTBOX SECRTOPN
 */
const SnackBarSection = () => {
  return (
    <div>SNACKBAR ? SECTION</div>
  )
}

/**
 * LIGHTBOX SECRTOPN
 */
const ToolTipSection = () => {
  return (
    <div>TOOLTIP  SECTION</div>
  )
}

/**
 * DRAWER SECTION
 */
const DrawerSection = () => {
  const [showLB1, setshowLB1] = useState(false);
  const [showLB2, setshowLB2] = useState(false);
  const [showLB3, setshowLB3] = useState(false);
  const [showLB4, setshowLB4] = useState(false);
  const [showLB5, setshowLB5] = useState(false);
  const [showLB6, setshowLB6] = useState(false);
  const [showLB7, setshowLB7] = useState(false);

  const toggleLB1 = () => setshowLB1(!showLB1);
  const toggleLB2 = () => setshowLB2(!showLB2);
  const toggleLB3 = () => setshowLB3(!showLB3);
  const toggleLB4 = () => setshowLB4(!showLB4);
  const toggleLB5 = () => setshowLB5(!showLB5);
  const toggleLB6 = () => setshowLB6(!showLB6);
  const toggleLB7 = () => setshowLB7(!showLB7);


  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div>
      <Container hasBorder borderDirections="b" paddingVertical="10px">
        <Row justify="space-between">
          <span>Basic Drawer</span>
          <Button label="Open" onClick={toggleLB1} />
        </Row>
      </Container>
      <Container hasBorder borderDirections="b" paddingVertical="10px">
        <Row justify="space-between">
          <span>Drawer behind header</span>
          <Button label="Open" onClick={toggleLB2} />
        </Row>
      </Container>
      <Container hasBorder borderDirections="b" paddingVertical="10px">
        <Row justify="space-between">
          <span>With specfied size </span>
          <Button label="Open" onClick={toggleLB3} />
        </Row>
      </Container>
       
      <Container paddingVertical="10px">
        <Row justify="space-between">
          <span>With title and bottom Actions</span>
          <Button label="Open" onClick={toggleLB4} />
        </Row>
      </Container>

      <Container paddingVertical="10px" marginVertical="12px" hasBorder borderDirections="b"> Directional </Container>
      <Row>
        <Button textColor={theme.colors.textColor}  onClick={toggleLB5}>Left</Button>
        <Spacing padding="0 10px">
          <Button textColor={theme.colors.textColor}  onClick={toggleLB6}>Top</Button>
        </Spacing>
        <Button textColor={theme.colors.textColor}  onClick={toggleLB7}>Bottom</Button>
      </Row>


      <Drawer show={showLB1} toggle={toggleLB1}> Basic Drawer </Drawer>

      <Drawer show={showLB2} toggle={toggleLB2} behindHeader>
        Drawer behind the <b>Header</b>.
      </Drawer>

      <Drawer show={showLB3} toggle={toggleLB3} size="40%" responsiveSize="100%">
        Drawer with speficied size
      </Drawer>

      <Drawer 
        show={showLB4}
        toggle={toggleLB4}
        isFixed
        width="400px"
        height="600px"
        title="The title"
        bottomActions={[
          <Button>Action 1</Button>,
          <Button filled>Action 2</Button>
        ]}
      >
        Drawer with Title and Bottom actions
      </Drawer>

      <Drawer direction="left" show={showLB5} toggle={toggleLB5}> Left Drawer </Drawer>
      <Drawer direction="top" show={showLB6} toggle={toggleLB6}> Top Drawer </Drawer>
      <Drawer direction="bottom" show={showLB7} toggle={toggleLB7}> Bottom Drawer </Drawer>

    </div>
  );
};