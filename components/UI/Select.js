import React, {useState} from 'react';
import DropDownView from './DropDownView';
import theme from '../../config/theme';
import { getSelectedIndexFromValue, searchfilter } from '../../functions/functions';
import IcSearch from 'react-icons/lib/md/search';

const Select = ({
  options, 
  onChange,  
  defaultValue,
  hasSearchFilter
}) => {
  options.forEach((item, index) => {item.index = index; });

  const [selectedIndex, setSelctedIndex] = useState(getSelectedIndexFromValue(defaultValue, options));
  const [keyword, setKeyword] = useState("");
  const [searchOptions, setSearchOptions] = useState(options);

  /**
   * HANDLE SEARCH
   */
  const onSearch = ({target: {value}}) => {
    setSelctedIndex("");
    if (onChange) onChange(null);
    setKeyword(value);
    setSearchOptions(searchfilter(value, options));
  }

  /**
   * SELECT ONLY OPTION (IF THAT IS WHAT IS ENTERED)
   */
  const selectOnlyOption = ({ target: { value } }) => {
    if (searchOptions.length === 1){
      handleSelect(searchOptions[0].index);
    }
  }

  /**
   * HANDLE OPTION CLICK
   */
  const handleSelect = (index) => {
    setKeyword("");
    setSelctedIndex(index);
    if (onChange) onChange(options[index].value || options[index].label);
  }

  /**
   * MAP THE OPTIONS
   */
  const optionWidgets = searchOptions.map((item, index)=> {
    const isSelected = item.index === selectedIndex;

    return (
      <Option 
        key={`${item.label}_${index}`}
        {...item}
        onSelect={handleSelect}
        isSelected={isSelected}
      />
    )
  });

  const valueExists = selectedIndex !== null && options[selectedIndex];
  const inputValue = 
    (keyword) ? keyword
    : (valueExists) ? options[selectedIndex].label 
    : (hasSearchFilter ? "" : "Not selected");
  const viewIcon = (hasSearchFilter)
    ? <IcSearch className="search" />
    : (valueExists) ? options[selectedIndex].icon
    : null;
  
  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="Select">      
      <DropDownView
        view={
          <div className="view">
            {viewIcon && <div className="icon">{viewIcon}</div>}

            <input
              type="text"
              value={inputValue}
              placeholder={hasSearchFilter && "Search"}
              disabled={!hasSearchFilter}
              onChange={onSearch}
              onBlur={selectOnlyOption}
            />
          </div>
        }
        
        dropView = { <div className="holder"> {optionWidgets} </div> }
        dropDownHeight="200px"
        matchWidth
        width="100%"
        closeOnDropViewClick={true}
      />

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .view {
          display: flex;
          width: 100%;
          align-items: center;
        }

        .icon {
          vertical-align: middle;
          font-size: 1.5em;
          margin-right: 10px;
          margin-top: -4px;
        }

        .Select {
          border: 1px solid ${theme.colors.borderColor};
          border-radius: 5px;
        }

        input {
          width: 100%; 
          background: none !important;
          padding: 0;
          border: none;
          cursor: pointer;
          color:${inputValue === "Not selected" ? theme.colors.lightText : theme.colors.textColor }
        }

        input:focus {
          box-shadow: none;
        }

        .icon :global(svg *){
          color: ${theme.colors.primaryColor};
        }

        .icon :global(.search *){
          color: ${theme.colors.lightText};
        }
      `}</style>
    </div>
  );
};

export default Select;

/**
 * OPTIONS
 */
const Option = ({ icon, label, index, onSelect, isSelected }) => {
  const background = (isSelected) ? theme.colors.highlightColor : theme.colors.backgroundColor;
  const fontWeight = (isSelected) ? "bold" : "normal";
  
  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="Option" onClick={()=> onSelect(index)}>
      {icon && <div className="icon">{icon}</div>}
      <div className="label">{label}</div>
      

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .Option {
          padding: 10px;
          cursor: pointer;
          color: ${theme.colors.textColor};
          background: ${background};
          font-weight: ${fontWeight};
          display: flex;
          align-items: center;
          transition: all linear 0.25s;
          border-radius: 5px;
        }

        .Option:hover {
          background: ${theme.colors.highlightColor};
        }

        .icon {
          margin-right: 12px;
          font-size: 1.3em;
        }

        .icon :global(svg *){
          color: ${theme.colors.primaryColor};
        }
      `}</style>
    </div>
  );
};

