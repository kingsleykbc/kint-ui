import React, {useState} from 'react';
import Container from '../UI/Container';
import PageDivider from '../UI/PageDivider';
import Exhibit from '../UI/Exhibit';
import { Row, Flex } from '../UI/Flex';
import {FormikSelect, FormikTextField} from '../UI/FormFields';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Space from '../UI/Space';


const FormSection = () => {
  const [data, setdata] = useState();

  return (
    <Container marginVertical="10px">
      
      <PageDivider label="Form Section" />
      {JSON.stringify(data)}

      <Row >
        <Flex span={1}>
          
        
        <Exhibit label="FormField" >
          <Formik
            validationSchema = {yup.object({name: yup.string("cannot be empty").email("Enter email")})}
            initialValues={{name:"", age:"", time:"", category:"", method:"car", comment:"", number: "10" }}
            onSubmit={(data) => setdata(data)}
            render={({ values, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                
                {/* THE FIELDS */}
                <FormikTextField
                  hasError={errors.age}
                  name="name"
                  placeholder="Name"
                  label="Name"
                />

                <Row wrapOnlyResponsive>
                  <Flex span={1}>
                    <FormikTextField
                      hasError = {errors.age}
                      name="age"
                      type="number"
                      placeholder="Age"
                      label="Age"
                    />
                  </Flex>

                  <Space/>

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
                  <option>--</option>
                  <option>Category 1</option>
                </FormikSelect>

                <br/>
                <br/>
                <br/>
                <button>Submit</button>
              </Form>
            )}
          />


        </Exhibit>
      
        </Flex>
      </Row>
    </Container>
  );
};

export default FormSection;