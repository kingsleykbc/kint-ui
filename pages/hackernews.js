import TestLayout from '../components/TestLayout';
import SectionContent from '../components/UI/SectionContent';
import axios from 'axios';
import Error from 'next/error';

import React, { Component } from 'react';
import Story from '../components/IndexComponents/StoryList';
import StoryList from '../components/IndexComponents/StoryList';
import Container from '../components/UI/Container';

class Index extends Component {
  static async getInitialProps(){
    try{
      const {data:stories} = await axios.get("https://node-hnapi.herokuapp.com/news?page=1");
      return {stories}
    }
    catch(e){
      return {stories: "Error"};
    }
  }

  render() {
    const {stories} = this.props;

    if (stories =="Error") return <Error statusCode={503}/>

    // =======================================================================
    //  UI
    // =======================================================================
    return (
      <TestLayout>
        <SectionContent vPadding="0">
          <Container marginTop="25px">
            <h1>Welcome to Hacker News</h1>
          </Container>
        </SectionContent>
        
        <SectionContent label={"Posts"}>
          <StoryList stories={stories}/>
        </SectionContent>
      </TestLayout>
    );
  }
}

export default Index;