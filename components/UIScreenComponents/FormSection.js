import React, {useState} from 'react';
import Container from '../UI/Container';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import { Row, Flex, Column } from '../UI/Flex';
import { FormikSelect, FormikTextField, InputField, FormikCheckButton, InputCheckButton} from '../UI/FormFields';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Spacing  from '../UI/Spacing';
import Button from '../UI/Button';
import Select from '../UI/Select';

import Icon from 'react-icons/lib/md/ac-unit';
import Icon2 from 'react-icons/lib/md/add-a-photo';
import Icon3 from 'react-icons/lib/md/cached';

const FormSection = () => {
  return (
    <Container marginVertical="10px">      
      <PageDivider label="Form Section" />
    
      <Row align="stretch">
        <Flex span={1}> <FormView /></Flex>
        <Flex>
          <Column stretchChildren fillHeight >
            <CustomSelectView/>
            <Flex span={1}>
              <CustomInputFields />
            </Flex>
          </Column>
        </Flex>
      </Row>
    </Container>
  );
};

export default FormSection;


const FormView = () => {
  const [data, setdata] = useState();

  return (
    <Exhibit label="FormField">
      {/* <pre>

      {JSON.stringify(data, "null", 500000)}
      </pre> */}

      <Formik
        validationSchema={yup.object({ 
          name: yup.string("cannot be empty").required(), 
          category: yup.string().required() 
        })}
        initialValues={{ 
          name: "", 
          pass: "",
          age: "", 
          time: "", 
          category: "", 
          method: "car", 
          comment: "", 
          number: "10", 
          isChecked: "1",
          radioVal: "1",
          switchVal: false
        }}

        onSubmit={(data) => setdata(data)}>
        {({ values, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>

            {/* THE FIELDS */}
            <FormikTextField
              hasError={errors.name}
              name="name"
              placeholder="Name"
              label="Text"
            />

            <FormikTextField
              hasError={errors.pass}
              name="pass"
              placeholder="Password"
              type="password"
              label="Password"
            />

            <Row responsiveWidth="400px" wrapOnlyResponsive>
              <Flex span={1}>
                <FormikTextField
                  hasError={errors.age}
                  name="age"
                  type="number"
                  placeholder="Age"
                  label="Number"
                />
              </Flex>

              <Spacing responsivePadding="0" responsiveWidth="400px" />

              <Flex span={1}>
                <FormikTextField
                  hasError={errors.time}
                  name="time"
                  placeholder="Time"
                  label="Time"
                  type="time"
                />
              </Flex>
            </Row>

            <FormikSelect
              hasError={errors.category}
              name="category"
              label="Category"
            >
              <option value="">--</option>
              <option>Category 1</option>
            </FormikSelect>

            <FormikTextField
              hasError={errors.time}
              name="comment"
              placeholder="Comment"
              label="Comment"
              type="textarea"
            />
            <Spacing padding="5px" />

            <FormikCheckButton name="isChecked" label="Checkbox 1" value="1" />
            <FormikCheckButton name="isChecked" label="Checkbox 2"  value="2" />

            <Spacing padding="15px" />

            <FormikCheckButton type="radio" name="radioVal" label="Radio 1" value={true} />
            <FormikCheckButton type="radio" name="radioVal" label="Radio 2" value={false} />

            <Spacing padding="15px" />

            <FormikCheckButton type="switch" name="switchVal" label="Switch" />

            <Container alignment="center" marginTop="25px">
              <Button label="Submit" filled hasShadow  width="150px"/>
            </Container>
          </Form>
        )}
      </Formik>
    </Exhibit>
  );
};


const CustomSelectView = () => {
  const options = [
    { value: "Value 1", label: "Option 1" },
    { value: "Value 1", label: "Option 2" },
    { value: "Value 1", label: "Option 3" },
    { value: "Value 1", label: "Option 4" }
  ]; 

  const optionsWithIcon = [
    { icon: <Icon/>, value: "Value 1", label: "Icon option 1" },
    { icon: <Icon2/>, value: "Value 1", label: "Icon option 2" },
    { icon: <Icon3/>, value: "Value 1", label: "Icon option 3" },
    { icon: <Icon/>, value: "Value 1", label: "Icon option 4" }
  ]; 

  const searchableOptions = [
    { label: "Apple" },
    { label: "Banana" },
    { label: "Carrot" },
    { label: "Dewberry" },
    { label: "Egg plant" }
  ]; 

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div>
      <Exhibit label="Select">
        <Select options={options} />

        <Spacing padding="10px" />

        <Select options={optionsWithIcon} defaultValue="Value 1" />

        <Spacing padding="10px" />

        <Select options={searchableOptions} hasSearchFilter />
      </Exhibit>
    </div>
  );
};



const CustomInputFields = () => {
  return (
    <Exhibit label="InputField">
        <InputField 
          label="With Icon"
          leadingIcon={<Icon/>}
          placeholder="Text"
        />
        <InputField 
          label="Has Error"
          hasError
          errorMessage="Error message"
        />
        <InputField
          label="Disabled"
          value="Text"
          disabled
        />

      <InputField
        label="Underline border type"
        borderType="underline"
        placeholder="Text"
      />

      </Exhibit>
  );
};
