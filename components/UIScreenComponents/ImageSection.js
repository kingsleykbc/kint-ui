import React, {useState} from 'react';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import { Flex, Row, Column } from '../UI/Flex';
import { Text } from '../UI/TextComponents';
import ImageUpload from '../UI/ImageUpload';
import Image from '../UI/Image';
import Container from '../UI/Container';
import Button from '../UI/Button';
import theme from '../../config/theme';
import Spacing from '../UI/Spacing';
import Carousel from '../UI/Carousel';

const ImageSection = () => {
  const [src, setSrc] = useState("https://picsum.photos/300/150");

  return (
    <div>
      <PageDivider label="Images"/>
      <Row wrap={false} responsiveCollapse> 
        <Flex span={1}>
          <Exhibit label="ImageUpload">
            <Row>
              <Flex>
                <Container marginRight="15px" responsiveMarginBottom="10px">
                  <ImageUpload height="300px" aspectRatio={8/16}/>
                </Container>
              </Flex>
              <Flex span={1}>
                <Column>
                  <Flex>
                    <ImageUpload/>
                  </Flex>
                  <Flex span={1}>
                    <Container marginTop="10px">
                      <ImageUpload aspectRatio={16/5} width="100%" aspectRatioHeight="13%" />
                    </Container>
                  </Flex>
                </Column>
              </Flex>
            </Row>
            <Container marginTop="10px">
              <ImageUpload width="200px"/>
            </Container>
          </Exhibit>
        </Flex>
        
        <Flex>
          <Exhibit label="Image">
            <Row>

              <Container margin="12px">
                <Column>
                  <Image/>
                  <Container marginTop="12px"> <Text fontSize="0.9rem" color={theme.colors.textColor}>Basic Image</Text></Container>
                </Column>
              </Container>

              <Container margin="12px">
                <Column>
                  <Image hasShadow />
                  <Container marginTop="12px"> <Text fontSize="0.9rem" color={theme.colors.textColor}>With shadow</Text></Container>
                </Column>
              </Container>

              <Container margin="12px">
                <Column>
                  <Image fit="cover" hasShadow isSquare placeholder="https://web.aflia.net/wp-content/uploads/2018/12/aflia-governing-female2-275x300.jpg" />
                  <Container marginTop="12px"> 
                    <Text fontSize="0.9rem" color={theme.colors.textColor}>Custom placeholder</Text>
                  </Container>
                </Column>
              </Container>
            </Row>
            <Row align="flex-start">
              <Container margin="12px">
                <Column>
                  <Image isRounded />
                  <Container marginTop="12px"> 
                    <Text fontSize="0.9rem" color={theme.colors.textColor}>Rounded Image</Text>
                  </Container>
                </Column>
              </Container>

              <Container margin="12px">
                <Column>
                  <Image isLoading />
                  <Container marginTop="12px"> 
                    <Text fontSize="0.9rem" color={theme.colors.textColor}>Loading Image</Text>
                  </Container>
                </Column>                
              </Container>

              <Container margin="12px">
                <Column>
                  <Image width="200px" mobileWidth="50px" responsiveWidth="700px" />
                  <Container marginTop="12px">
                    <Text fontSize="0.9rem" color={theme.colors.textColor}>Sized Image</Text>
                  </Container>
                </Column>
              </Container>
            </Row>

            <Container paddingTop="15px" hasBorder borderDirections="t">      
              <Image src={src} width="300px" height="150px" mobileWidth="250px" mobileHeight="125px" hasShadow />

              <Spacing isInline padding="10px">
                <Button onClick={() => {
                  setSrc(null);
                  setSrc("https://picsum.photos/300/150?random&t=" + new Date().getTime());
                }}>Refresh Image</Button>
              </Spacing>       
            </Container>
          </Exhibit>
        </Flex>
      </Row>

      <Spacing/>

      <Exhibit label="Carousel">
        <Carousel>
          <div className="slide">
            <Image lock src="https://picsum.photos/1920/300" width="100%" height="200px" fit="cover" />
          </div>
          <div className="slide">
            <Image lock src={"https://picsum.photos/1920/300?random&t=" + new Date().getTime()} width="100%" height="200px" fit="cover" />
          </div>
          <div className="slide">
            <Image lock src={"https://picsum.photos/1920/300?random&t=" + new Date(2020).getTime()} width="100%" height="200px" fit="cover" />
          </div>
        </Carousel>

        <PageDivider label="Custom"/>

        <Carousel infinite={false} autoPlay showDots={false}>
          <div className="slide">
            <Image lock src="https://picsum.photos/1920/300" width="100%" height="200px" fit="cover" />
          </div>
          <div className="slide">
            <Image lock src={"https://picsum.photos/1920/300?random&t=" + new Date().getTime()} width="100%" height="200px" fit="cover" />
          </div>
          <div className="slide">
            <Image lock src={"https://picsum.photos/1920/300?random&t=" + new Date(2020).getTime()} width="100%" height="200px" fit="cover" />
          </div>
          <div className="slide">
            <Image lock src={"https://picsum.photos/1920/300?random&t=" + new Date(2020).getTime()} width="100%" height="200px" fit="cover" />
          </div>
          <div className="slide">
            <Image lock src={"https://picsum.photos/1920/300?random&t=" + new Date(2020).getTime()} width="100%" height="200px" fit="cover" />
          </div>
        </Carousel>
      </Exhibit>
    </div>
  );
};

export default ImageSection;