import React from 'react';
import Exhibit from '../UI/Exhibit';
import PageDivider from '../UI/PageDivider';

const PageDividerSection = () => {
  return (
    <div>
      <PageDivider label="Page divider"/>
      <Exhibit label="PageDivider">
        <PageDivider />
        <PageDivider label="Left label" />
        <PageDivider labelPosition="center" label="Center label" />
        <PageDivider labelPosition="right" label="Right label" />
      </Exhibit>
    </div>
  );
};

export default PageDividerSection;