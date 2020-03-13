import React from 'react';
import classnames from 'classnames';
import { Field, ErrorMessage } from 'formik';


export const FormikTextField = ({
  name,
  type,
  label,
  maxLength,
  hasError,
  placeholder,
  disabled,
  ...fieldViewProps
}) => {

  return (
    <FormFieldView
      {...fieldViewProps}
      label={label}
      inputSection={
        <Field
          type={type || "text"}
          name={name}
          component={(type === "textarea") ? "textarea" : "input"}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          className={classnames({ hasError })}
        />
      }
      errorSection={<ErrorMessage name={name} render={msg => <h5>{msg}</h5>} />}
    />
  );
};

export const FormikSelect = ({
  label,
  name,
  children,
  disabled,
  hasError,
  ...fieldViewProps
}) => {
  return (
    <FormFieldView
      {...fieldViewProps}
      label={label}
      inputSection = {
        <Field
          component="select"
          name={name}
          disabled={disabled}
          className={classnames({ formError: hasError })}
        >
          {children}
        </Field>
      }
      errorSection={
        <ErrorMessage name={name} render={msg => <h5>{msg}</h5>} />
      }
    />
  );
}

/**
 * THE WRAPPER FOR THE FORM FIELD
 */
const FormFieldView = ({
  label, 
  inputSection,
  errorSection,
  errorAlignment, 
  inputWidth
}) => {

  errorAlignment = errorAlignment || "right";
  inputWidth = inputWidth || "100%";

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="formField">
      <h4>{label}</h4>
      <div className="inputSection">{inputSection}</div>
      <div className="errorSection">{errorSection}</div>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .formField{
          margin-bottom: 20px;
        }

        .formField :global(input), .formField :global(select), .formField :global(textarea){
          width: ${inputWidth};
        }

        .inputSection{
          margin: 10px 0;
        }

        .errorSection{
          text-align: ${errorAlignment};
        }
      `}</style>
    </div>
  );
}