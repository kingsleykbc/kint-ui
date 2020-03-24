import TestLayout from "../components/TestLayout";
import {useState} from 'react';
import SectionContent from "../components/UI/SectionContent";
import Container from "../components/UI/Container";
import { Par } from "../components/UI/TextComponents";
import theme from "../config/theme";

import ButtonSection from "../components/UIScreenComponents/ButtonSection";
import DropDownSection from "../components/UIScreenComponents/DropDownSection";
import HeaderSection from "../components/UIScreenComponents/HeaderSection";
import InfoSection from "../components/UIScreenComponents/InfoSection";
import FormSection from "../components/UIScreenComponents/FormSection";
import TextSection from "../components/UIScreenComponents/TextSection";
import LoaderSection from "../components/UIScreenComponents/LoaderSection";
import ResultPageSection from "../components/UIScreenComponents/ResultPageSection";
import ImageSection from "../components/UIScreenComponents/ImageSection";
import LayoutSection from "../components/UIScreenComponents/LayoutSection";
import ThemeSection from "../components/UIScreenComponents/ThemeSection";
import ModalSection from "../components/UIScreenComponents/ModalSection";
import NavigationSection from "../components/UIScreenComponents/NavigationSection";
import CarouselSection from "../components/UIScreenComponents/CarouselSection";
import ListSection from "../components/UIScreenComponents/ListSection";
import PageDividerSection from "../components/UIScreenComponents/PageDividerSection";
import HorizontalScrollMenuSection from "../components/UIScreenComponents/HorizontalScrollMenuSection";
import Spacing from "../components/UI/Spacing";
import Button from "../components/UI/Button";

const ui = () => {
  const [showRest, setShowRest] = useState(false);
  const [showRest2, setShowRest2] = useState(false);


  return (
    <TestLayout head={{
      title: "Kint-UI",
      descption: "Custom UI library built in React.js"
    }}>
      <SectionContent vPadding="30px">
        <br/>
        <h1>Custom UI</h1>
        <Container marginTop="15px">
          <Par color={theme.colors.lightText}>
            Here are some custom UI elements to use in your applications.
          </Par>
        </Container>
      </SectionContent>

      <SectionContent maxWidth="1200px" vPadding="0">
        <TextSection/>
        <ButtonSection/>
        <DropDownSection/>
        <HeaderSection/>
        

        {!showRest && 
          <Container alignment="center" marginVertical="40px">
            <Button onClick={()=> setShowRest(true)}>More</Button>
          </Container>
        }
        {showRest &&
          <div>
            <NavigationSection />
            <PageDividerSection />
            <InfoSection />
            <LayoutSection />
            <ListSection />
            <HorizontalScrollMenuSection />
            <FormSection />
          </div>
        }

        {(showRest && !showRest2) &&
          <Container alignment="center" marginVertical="40px">
            <Button onClick={() => setShowRest2(true)}>More</Button>
          </Container>
        }
        {showRest2 && 
          <div>
            <ImageSection />
            <LoaderSection />
            <ModalSection />
            <CarouselSection />
            <ResultPageSection />
            <ThemeSection />
          </div>
        }
      </SectionContent>     

      <Spacing padding="50px"/>
    </TestLayout>
  );
};

export default ui;