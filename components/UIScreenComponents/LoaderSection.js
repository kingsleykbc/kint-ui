import React from 'react';
import Spacing from '../UI/Spacing';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import { Row, Flex, Column } from '../UI/Flex';
import CircularLoader from '../UI/CircularLoader';
import Container from '../UI/Container';
import theme from '../../config/theme';
import DotLoader from '../UI/DotLoader';
import SkeletonContainer from '../UI/SkeletonContainer';

const LoaderSection = () => {
  return (
    <div>

      <PageDivider label="Loaders" />

      <Row>
        <Flex span={14} shrink={0}>
          <Column fillHeight>
            <Flex>
              <Exhibit label="CircularLoader">
                <Row>
                  <Flex>
                    <Row>
                      <CircularLoader size="2.5rem"/>
                      <Container marginLeft="20px">Basic loader</Container>
                    </Row>

                    <Spacing /> 
                    <Row>
                      <CircularLoader size="2.5rem" color2={theme.colors.textColor} />
                      <Container marginLeft="20px">Dual color loader</Container>
                    </Row>

                    <Spacing />
                    <Row>
                      <CircularLoader size="2.5rem" singleBorder />
                      <Container marginLeft="20px">Single border loader</Container>
                    </Row>
                  </Flex>
                  <Flex>
                    <Container marginLeft="10px" responsiveMarginLeft="10px">
                      <Row>
                        <CircularLoader size="2.5rem" color={theme.colors.secondaryColor} />
                        <Container marginLeft="20px">Colored loader</Container>
                      </Row>

                      <Spacing />
                      <Row>
                        <CircularLoader size="3.5rem" />
                        <Container marginLeft="20px">Sized loader</Container>
                      </Row>
                    </Container>
                  </Flex>
                </Row>
              </Exhibit>
            </Flex>

            <Flex>
              <Exhibit label="DotLoader">
                <Row justify="space-around">
                  <Container padding="10px">
                    <DotLoader/>

                    <Container paddingTop="20px"> Basic Loader </Container>
                  </Container>

                  <Container padding="10px">
                    <DotLoader />

                    <Container paddingTop="20px"> Colored Loader </Container>
                  </Container>
                  <Container padding="10px" alignment="center"> 
                    <DotLoader dotSize="40px" />

                    <Container paddingTop="20px" alignment="center"> Sized Loader </Container>
                  </Container>
                </Row>
              </Exhibit>
            </Flex> 
          </Column>
        </Flex>


        <Flex span={0}>
          <Exhibit label="SkeletonContainer">
            <Row>
              <Flex>
                <SkeletonContainer width="60px" height="60px" borderRadius="50%"/>
              </Flex>
              <Flex span={1}>
                <Container marginLeft="20px" >
                  <SkeletonContainer borderRadius="5px" width="200px" height="20px" color={theme.colors.lightestText}/>             
                  <SkeletonContainer borderRadius="20px" marginTop="10px" height="10px" />
                  <SkeletonContainer borderRadius="20px" marginTop="15px" width="300px" height="10px" />            
                </Container>
              </Flex>
            </Row>

            <SkeletonContainer borderRadius="20px" marginTop="40px" height="10px" />
            <SkeletonContainer borderRadius="20px" marginTop="15px" height="10px" />
            <SkeletonContainer borderRadius="20px" marginTop="15px" height="10px" />
            <SkeletonContainer borderRadius="20px" marginTop="15px" height="10px" width="300px"/>

            <PageDivider/>

            <Row>
              <SkeletonContainer width="60px" height="60px" borderRadius="50%" />
              <Spacing/>
              <SkeletonContainer width="60px" height="60px" borderRadius="20px" />
              <Spacing />
              <SkeletonContainer width="60px" height="60px" borderRadius="5px" />

              <Spacing />
              <SkeletonContainer width="100px" height="15px" borderRadius="5px" color={theme.colors.primaryColor} />          
            </Row>

          </Exhibit>
        </Flex>
      </Row>

      <Spacing padding="10px"/>
    </div>
  );
};

export default LoaderSection;