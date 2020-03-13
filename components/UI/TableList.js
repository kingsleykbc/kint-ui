import React,{useState} from 'react';
import theme from '../../config/theme';
import classnames from 'classnames';
import ResponsiveToggle from './ResponsiveToggle';

const TableList = ({ data, responsiveWidth, noDataView, mobileKeys, cellPadding }) => {
  
  /**
   * IF NO DATA ENTERED
   */
  if (!data || data.length === 0 ) return (noDataView || <p>No data</p>);

  /**
   * GET CSS
   */
  cellPadding = cellPadding || "15px 0";
  responsiveWidth = responsiveWidth || "800px";

  /**
   * GET THE HEADINGS
   */
  const heading = Object.keys(data[0]).map((item, index)=>  (
    <th key={`${item}_${index}`}>
      {item}

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        th {
          padding: ${cellPadding};
        }
      `}</style>
    </th>
  ));

  /**
   * GET THE TABLE ROWS AND COLUMNS
   */
  const items = data.map(
    (item, index) => <Tr 
      key={`row_${index}`} 
      data={data} 
      index={index}
      cellPadding={cellPadding}
    />
  );

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="TableList">
      <table>
        <thead><tr>{heading}</tr></thead>
        <tbody>
          {items}
        </tbody>
      </table>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        table{
          width: 100%;
          border-collapse: collapse;
        }

        @media screen and (max-width: 800px){
          thead { display: none; }
        }
      `}</style>
    </div>
  );
};

export default TableList;

/**
 * TR
 */
const Tr = ({data, index, cellPadding }) => {
  const [hide, setHide] = useState(true);
  const toggleHidable = () => setHide(!hide);

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <tr>
      {Object.keys(data[index]).map((key, ind) => {
        return (
          <td className={classnames({ hidable: ind !== 0, hidden: hide })} onClick={toggleHidable} key={ind}> 
            <ResponsiveToggle large="" small={ind !== 0 && <b>{key} : </b>}/>
            {data[index][key]} 
          </td>  
        );
      })}

      <style jsx>{`
        td{
          padding: ${cellPadding};
          border-top: 1px solid ${theme.colors.borderColor};
        }

        @media screen and (max-width: 800px){
          td{
            border-top: none;
            border-bottom: 1px solid ${theme.colors.borderColor};
            width: 100%;
            margin-left: 20px;
            display: flex;
            align-items: center;
          }

          b{
            margin-right: 10px;
          }

          tr{
            display: flex;
            flex-direction: column;
          }

          .hidable.hidden {
            display: none;
          }

          td:first-child {
            cursor: pointer;
            padding: 20px 10px;
            margin-left: 0;
            font-weight: bold;
            transition: background linear 0.2s;
          }

          td:first-child:hover{
            background: ${theme.colors.highlightColor};
          }

          tr:last-child td:first-child {
            border-bottom: none;
          }
        }
      `}</style>
    </tr>
  );
}