import React from 'react';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import { Flex, Row } from '../UI/Flex';

const ImageSection = () => {
  return (
    <div>
      <PageDivider label="Images"/>
      <Row>
        <Flex span={1}>
          <Exhibit label="ImageUpload">
          </Exhibit>
        </Flex>
        
        <Flex span={1}>
          <Exhibit label="Image">

          </Exhibit>
        </Flex>
      </Row>
    </div>
  );
};

export default ImageSection;