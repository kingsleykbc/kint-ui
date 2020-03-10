import React from 'react';
import {Row} from '../Flex';

const Logo = ({ children }) => {


  return (
    <Row className="Logo">
      {children}

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        
        @media screen and (max-width: 800px){
          :global(.Logo) {
            flex-grow: 1 !important;
            width: auto !important;
          }
        }
      `}</style>
    </Row>
  );
};

export default Logo;


