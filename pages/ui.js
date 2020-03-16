import TestLayout from "../components/TestLayout";
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
import SkeletonSection from "../components/UIScreenComponents/SkeletonSection";
import PageDividerSection from "../components/UIScreenComponents/PageDividerSection";

const ui = () => {
  return (
    <TestLayout>
      <SectionContent vPadding="30px">
        <br/>
        <h1>Custom UI</h1>
        <Container marginTop="15px">
          <Par color={theme.colors.lightText}>
            Here are some custom UI elements to use in your applications.
          </Par>
        </Container>
      </SectionContent>

      <SectionContent maxWidth="1100px" vPadding="0">
        <TextSection/>
        <ButtonSection/>
        <DropDownSection/>
        <HeaderSection/>
        <NavigationSection/>
        <PageDividerSection/>
        <InfoSection/>
        <LayoutSection/>
        <ListSection/>
        <FormSection/>
        <ModalSection/>
        <ResultPageSection/>
        <LoaderSection/>
        <ImageSection/>
        <CarouselSection/>
        <ThemeSection/>
      </SectionContent>
      
    </TestLayout>
  );
};

export default ui;