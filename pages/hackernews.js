import TestLayout from '../components/TestLayout';
import SectionContent from '../components/UI/SectionContent';
import axios from 'axios';
import Error from 'next/error';

import React, { Component } from 'react';
import StoryList from '../components/IndexComponents/StoryList';
import Container from '../components/UI/Container';
import { Par } from '../components/UI/TextComponents';
import theme from '../config/theme';
import NextButton from '../components/IndexComponents/NextButton';


class Index extends Component {

  static async getInitialProps({ req, res, query:{page:pageNo} }) {
    let page = Number(pageNo) || 1;

    try{
      const {data:stories} = await axios.get(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      return {page, stories}
    }
    catch(e){
      return {stories: "Error"};
    }
  }

  render() {
    const { stories, page } = this.props;

    if (stories =="Error") return <Error statusCode={503}/>

    // =======================================================================
    //  UI
    // =======================================================================
    return (
      <TestLayout head={{
        title: "Hacker news",
        description: "A great hacker news API"
      }}>

        <Container maxWidth="900px" margin="auto" paddingTop="50px">
          <h1>Welcome to Hacker News</h1>

          <br/> 

          <Par color={theme.colors.lightText}>
            Welcome to the No 1. site for reading really good hacker news. Enjoy our articles.
          </Par>
        </Container>
        
        <SectionContent label={"Posts"}>
          <StoryList stories={stories}/>
          
          <NextButton page={page} />
        </SectionContent>
      </TestLayout>
    );
  }
}

export default Index;