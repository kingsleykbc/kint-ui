import React,{useState} from 'react';
import DropDownView from '../DropDownView';
import Search from '../Search';

const SearchInput = ({placeholder, maxWidth, suggestions, onChange}) => {

  return (
    <div className="SearchInput">
      <DropDownView
        view={<Search placeholder={placeholder} onChange={onChange}/>}
        dropView={(suggestions.length > 0) && suggestions}
        highlightOnHover={false}
        matchWidth={true}
      />
      
      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .SearchInput {
          width: 100%;
          max-width: ${maxWidth || "500px"};
        }
        
        @media screen and (max-width: ${"800px"}){
          .SearchInput {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchInput;