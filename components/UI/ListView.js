import React from 'react';

const ListView = ({ component: Component, keyPrefix, data, ...itemProps}) => {
  keyPrefix = keyPrefix || "";

  const items = (data && data.length > 0)
    ? data.map((item, index) => <Component  key={`${keyPrefix}_${index}`} {...item} {...itemProps}/>)
    : [];

  return  <div> {items} </div>
};

export default ListView;