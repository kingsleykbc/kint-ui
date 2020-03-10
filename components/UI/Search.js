import React from 'react';
import ClickableIcon from './ClickableIcon';
import IcSearch from 'react-icons/lib/md/search';
import { Row, Flex } from './Flex';
import Container from './Container';

const Search = ({placeholder, onChange, onSearch}) => {
  return (
    <div className="Search">
      <Row>
        <Flex span={1} responsiveWidth="auto" align="center" crossSpan="center">
          <input className="search" type="text" placeholder={placeholder} onChange={onChange} />
        </Flex>
        <Container marginLeft="8px">
          <ClickableIcon color="#000"><IcSearch/></ClickableIcon>
        </Container>
      </Row>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Search, input {
          width: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default Search;