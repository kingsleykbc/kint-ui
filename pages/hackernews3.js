import React,{useState} from 'react';
import TestLayout from '../components/TestLayout';
import SidebarPage from '../components/UI/SidebarPage';
import Container from '../components/UI/Container';
import theme from '../config/theme';

const sidebarpage = () => {

  return (
    <TestLayout>
      <SidebarPage>
        <SidebarPage.Sidebar hasBorder mobileWidth="400px" background={theme.colors.highlightColor}>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT 1 </Container>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> SIDE CONTENT  last</Container>
        </SidebarPage.Sidebar>

        <SidebarPage.Page>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
          <Container padding="15px" margin="10px" hasBorder> MAIN CONTENT </Container>
        </SidebarPage.Page>
      </SidebarPage>
    </TestLayout>
  );
};

export default sidebarpage;