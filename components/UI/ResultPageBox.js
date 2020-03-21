import React, { PureComponent } from 'react';
import Lightbox from './Lightbox';
import ResultPage from './ResultPage';

class ResultPageBox extends PureComponent {
  resultPageConfig = {
    type: "error",
    title: "Title",
    subTitle: "Sub title",
    bottomActions: null,
    icon: null,
  };

  isFullScreen = false;
  isFixed = false;

  state = { show: false }

  /**
   * TOGGLE
   */
  toggle =() => this.setState({show: !this.state.show });

  /**
   * ADD SHATUS
   */
  openResultPage = (resultPageConfig, isFullScreen, isFixed) => {
    this.resultPageConfig = { ...this.resultPageConfig, ...resultPageConfig};
    this.isFullScreen = isFullScreen;
    this.isFixed = isFixed;

    if (!isFullScreen) this.resultPageConfig.vPadding = "5%";

    this.toggle();
  }

  /**
   * CLOSE BOX
   */
  closeResultPage = () => this.setState({ show: false });


  // =======================================================================
  //  RENDER
  // =======================================================================
  render() {
    const { show } = this.state;

    // =======================================================================
    //  UI
    // =======================================================================
    return(
      <Lightbox 
        show={show} 
        isFixed = {this.isFixed}
        isFullScreen={this.isFullScreen}
        toggle={this.toggle} 
        autoHeight
        contentPadding="0"
      >
       <ResultPage {...this.resultPageConfig} />
      </Lightbox>
    );
  }
}

export default ResultPageBox;