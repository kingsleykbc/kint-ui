import React, {useState} from 'react';
import classnames from 'classnames';
import { Field, ErrorMessage } from 'formik';
import theme from '../../config/theme';

import IcView from 'react-icons/lib/md/visibility';
import IcViewOff from 'react-icons/lib/md/visibility-off';
import IcDropDown from 'react-icons/lib/md/keyboard-arrow-down';

export const FormikTextField = ({
  name,
  type,
  label,
  maxLength,
  hasError,
  placeholder,
  isRegularInput,
  disabled,
  errorMessage,
  ...fieldViewProps
}) => {

  /**
   * PASSWORD TOGGLE
   */
  let [inputType, setInputType] = useState(type === "password" && "password");
  const toggleShowPassword = () => setInputType( inputType === "password" ? "text" : "password");

  /**
   * GET INPUT CONFIG
   */
  const formInputType = (type === "password") ? inputType : (type) ? type : "text";
  const formInputIcon = (type === "password") && (inputType === "text" ? <IcViewOff/> : <IcView/>);
  const fieldProps = {
    type:  formInputType,
    name:  name,
    disabled:  disabled,
    maxLength:  maxLength,
    placeholder:  placeholder,
    className:  classnames({ hasError })
  }

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <FormFieldView
      {...fieldViewProps}
      label={label}
      inputIcon={formInputIcon}
      onInputIconClick={(type === "password") && toggleShowPassword}

      inputSection={
        <div className="wrapper">
          {(isRegularInput) 
          ? 
            (type === "textarea") ? <textarea  {...fieldProps} /> : <input {...fieldProps}/>
          :
            <Field component={(type === "textarea") ? "textarea" : "input"} {...fieldProps} />
          }
        </div>
      }
      errorSection={
        !isRegularInput 
        ? <ErrorMessage name={name} render={msg => <h5>{msg}</h5>} />
        : (errorMessage && <h5>{errorMessage}</h5>)
      }
    />
  );
};

/**
 * SELECT FIELD
 */
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
      inputIcon={<IcDropDown />}
      disableInputIcon

      inputSection = {
        <Field
          component="select"
          name={name}
          disabled={disabled}
          className={classnames({ hasError })}
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
 * FORMIK CHECKBOX
 */
export const FormikCheckButton = ({
  label,
  name,
  type,
  value,
  checked,
  isRegularInput,
  disabled
}) => {
  const fieldProps = {
    name,
    value,
    disabled,
    checked,
    type: type === "radio" ? "radio" : "checkbox",
    className: classnames({
      checkBox:(!type || type === "checkbox"),
      radioBox: type === "radio", switch: type === "switch"
    }),
  }

  return (
    <div className="field">
      <label>
        {(isRegularInput) ? <input {...fieldProps}/> : <Field {...fieldProps}/>}       
        <span>{label}</span>
      </label>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        .field {
          display: inline-block;
          cursor: pointer !important;
          margin-right: ${label ? "20px" : 0};
        }
        
        label {
          cursor: pointer;
        }
      `}</style>
    </div>
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
  inputWidth,

  labelFontWeight,
  labelColor,
  labelFontSize,

  leadingIcon,
  inputIcon,  
  onInputIconClick,
  disableInputIcon
}) => {

  /**
   * GET CSS
   */
  errorAlignment = errorAlignment || "right";
  inputWidth = inputWidth || "100%";
  labelFontWeight = labelFontWeight || "bold";
  labelColor = labelColor || theme.colors.textColor;
  labelFontSize = labelFontSize || "0.9rem";
  
  const paddingLeft = (leadingIcon) ? "40px" : "12px";
  const inputIconIndex = (disableInputIcon) ? "-1" : "1";

  // =======================================================================
  //  UI
  // =======================================================================
  return (
    <div className="formField">
      <h4>{label}</h4>
      <div className="inputSection">
        {leadingIcon && <div className="leadingIcon">{leadingIcon}</div>}
        {inputSection}
        {inputIcon && <div className="fieldIcon" onClick={onInputIconClick}>{inputIcon}</div>} 
      </div>
      <div className="errorSection">{errorSection}</div>

      { /* STYLE ======================================================================================= */}
      <style jsx>{`
        h4{
          font-size: ${labelFontSize};
          color: ${labelColor};
          font-weight: ${labelFontWeight};
          margin-left: 5px;
        }

        .formField{
          margin-bottom: 20px;
        }

        .formField :global(input), .formField :global(select), .formField :global(textarea){
          width: ${inputWidth};
          padding-left: ${paddingLeft};
        }

        .inputSection{
          margin: 10px 0;
          position: relative;
        }

        .fieldIcon, .leadingIcon{
          position: absolute;
          right: 10px;
          top: calc(50% - 17px);
          cursor: pointer;
          padding: 4px;
          font-size: 1.3em;
          color: ${theme.colors.lightText};
          z-index: ${inputIconIndex};
        }

        .leadingIcon{
          left: 5px;
        }

        .fieldIcon :global(svg *), .leadingIcon :global(svg *) {
          color: ${theme.colors.lightText};

        }

        .fieldIcon:hover, .fieldIcon:hover :global(svg *){
          color: ${theme.colors.textColor} !important;
        }

        .errorSection{
          text-align: ${errorAlignment};
        }
      `}</style>
    </div>
  );
}

/**
 * INPUT FIELD
 */
export const InputField = (props) => <FormikTextField {...props} isRegularInput />

/**
 * INPUT CHECKBOX
 */
export const InputCheckButton = (props) => <FormikCheckButton {...props} isRegularInput />
