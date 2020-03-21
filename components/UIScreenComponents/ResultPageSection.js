import React, {useRef} from 'react';
import Container from '../UI/Container';
import Exhibit from '../UI/Exhibit';
import ResultPage from '../UI/ResultPage';
import { Row, Flex } from '../UI/Flex';
import Spacing from '../UI/Spacing';
import SectionContent from '../UI/SectionContent';
import { Par, IconText } from '../UI/TextComponents';
import Button from '../UI/Button';
import IcUI from 'react-icons/lib/md/spa';
import IcSuccess from 'react-icons/lib/md/check';
import theme from '../../config/theme';
import ResultPageBox from '../UI/ResultPageBox';
import PageDivider from '../UI/PageDivider';

const ResultPageSection = () => {
  return (
    <Container>
      <PageDivider label="Result Pages"/>
        
      <Exhibit label="ResultPage">

      <Container padding="15px" margin="10px" hasShadow>
        <BasicResultPage />
      </Container>

      <Container padding="15px" margin="10px" hasShadow >
        <ErrorResultPage />
      </Container>

      <Container padding="15px" margin="10px" hasShadow>
        <SuccessResultPage />
      </Container>

      <Container padding="15px" margin="10px" hasShadow>
        <LoadingResultPage />
      </Container>

        <Spacing padding="10px" />
      </Exhibit>

      <Spacing/>

      <Exhibit label="ResultPageBox">
        <Row justify="space-around">
          <Flex>
            <ResultPageViewSection/>
          </Flex>
          <Flex>
            <FullScreenResultPageViewSection />
          </Flex>
        </Row>

      </Exhibit>
    </Container>
  );
};

export default ResultPageSection;


const BasicResultPage = () => {
  return (
    <div>
      <ResultPage
        vPadding="5%"
        title="Basic Result Page"
        subTitle="Sub title of basic result page"
        iconColor={theme.colors.secondaryColor}
      />
    </div>
  );
};

const ErrorResultPage = () => {
  return (
    <div>
      <ResultPage
        vPadding="5%"
        type="error"
        title="Error Result Page"
        subTitle="Sub title of basic result page"
      />
    </div>
  );
};

const SuccessResultPage = () => {
  return (
    <div>
      <ResultPage
        vPadding="5%"
        type="success"
        title="Error Result Page"
        subTitle="Sub title of basic result page"
      />
    </div>
  );
};

const LoadingResultPage = () => {
  return (
    <div>
      <ResultPage
        vPadding="5%"
        type="loading"
        title="Loading Result Page..."
        subTitle="Sub title of basic result page"
      />
    </div>
  );
};


const ResultPageViewSection = () => {
  const resultRef = useRef(null);

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div>
      <SectionContent maxWidth="400px">
        <Par alignment="center">
          This is a popup component that slides up when the component is called by REF.
          </Par>

        <Container marginTop="20px" alignment="center">
          <Button label="Action" onClick={()=> resultRef.current.openResultPage({
            title: "Error Result Page Box",
            subTitle: "This is a fixed error result page, and can only be closed by calling the closeBox ref",
            bottomActions: [
              <Button label="Custom action 1" onClick={resultRef.current.closeResultPage} />,
              <Button label="Custom action 2" filled onClick={resultRef.current.closeResultPage} />
            ]
          }, false, true)}/>
        </Container>

        <ResultPageBox ref={resultRef}/>
      </SectionContent>
    </div>
  );
};

const FullScreenResultPageViewSection = () => {
  const resultRef = useRef(null);

  return (
    <div>
      <SectionContent maxWidth="400px">
        <Par alignment="center">
          This is a <b>Full screen</b> popup component that slides up when the component is called by REF.
        </Par>

        <Container marginTop="20px" alignment="center">
          <Button label="Action" onClick={() => resultRef.current.openResultPage({
            title: "Fullscreen Result Page",
            type: "success",
            subTitle: "This is a full screen result page, with the default bottom action and a footer widget.",
            footer: <IconText iconColor={theme.colors.textColor} icon={<IcUI/>}>Footer</IconText>,
            onDefaultBottomButtonClick: resultRef.current.closeResultPage
          }, true, false)} />
        </Container>
      </SectionContent>

      <ResultPageBox ref={resultRef} />
    </div>
  );
};

