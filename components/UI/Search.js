import React from 'react';
import ClickableIcon from './ClickableIcon';
import IcSearch from 'react-icons/lib/md/search';
import { Row, Flex } from './Flex';
import Container from './Container';

const Search = ({placeholder, onChange, onSearch}) => {
  return (
    <div className="Search"> 
      <Row wrap={false}>
        <Flex span={1} shrink={2} align="center" crossSpan="center">
          <input className="search" type="text" placeholder={placeholder} onChange={onChange} />
        </Flex>
        <Container marginLeft="8px">
          <ClickableIcon icon={<IcSearch />} color="#000"/>
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