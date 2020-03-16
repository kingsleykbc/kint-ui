import React, { PureComponent, useEffect } from 'react';
import theme from '../../config/theme';

import IcDanger from 'react-icons/lib/md/cancel';
import IcWarning from 'react-icons/lib/md/warning';
import IcSuccess from 'react-icons/lib/md/check-circle';
import IcInfo from 'react-icons/lib/md/info-outline';

export default class StatusText extends PureComponent {

  state = { show: false }

  /**
   * ADD SHATUS
   */
  openAreYouSureBox = (message, onYes) => {
    
  }

  // =======================================================================
  //  RENDER
  // =======================================================================
  render() {
    const { statusList } = this.state;

    const statusListWidgets = statusList.map(
      (item, index) => <Status key={index} {...item} onDismiss={() => this.removeStatus(item.index)}>{item.message}</Status>
    );

    // =======================================================================
    //  UI
    // =======================================================================
    return (<div> {statusListWidgets} </div>)
  }
}