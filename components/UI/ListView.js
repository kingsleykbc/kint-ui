import React from 'react';

const ListView = ({component:Component, data, ...itemProps}) => {
  const items = data.map((item, index) => <Component  key={index} {...item} {...itemProps}/>)

  return  <div> {items} </div>
};

export default ListView;