import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import './text-input.scss';

export class TextInput extends React.Component {
  maxStreetLength = 50;
  state = {
    [this.props.name]: '',
    error: null,
    errorMessage: null,
    warning: false,
  };

  setValue = (val) => {
    this.setState(() => {
      return { [this.props.name]: val };
    });
  };

  setError = (val) => {
    this.setState(() => {
      return { error: val };
    });
  };

  setErrorMessage = (val) => {
    this.setState(() => {
      return { errorMessage: val };
    });
  };

  setWarning = (val) => {
    this.setState(() => {
      return { warning: val };
    });
  };

  isValid = (fieldName, val) => {
    const length = val.trim().replace(/_/, '').length;
    const isStreet = fieldName.includes('street');
    const minLength = this.props.minLength || 1;
    const maxLength = isStreet
      ? this.maxStreetLength
      : this.props.maxLength || 255;

    if (minLength && length >= minLength && maxLength && length <= maxLength) {
      return true;
    } else {
      if (isStreet) {
        const { setErrors } = this.props;
        this.setErrorMessage('STREET_ADDRESS_TOO_LONG_ERROR');
        setErrors([fieldName]);
      }
      return false;
    }
  };

  onBlur = (e) => {
    const { id, value } = e.target;
    const { onBlur } = this.props;
    const length = value.trim().replace(/_/, '').length;
    const trimmedValue = value.trim();

    if (length > 0) {
      this.setValue(trimmedValue);

      if (this.isValid(id, value)) {
        this.setError(false);
      } else {
        this.setError(true);
      }
    }

    if (onBlur) onBlur({ [this.props.name]: trimmedValue });
  };

  onChange = (e) => {
    const value = e.target.value.trim();
    const { maxLength, onChange } = this.props;

    this.setValue(value);
    this.setError(null);
    this.setWarning(null);
    this.setErrorMessage(null);

    if (value.length === maxLength) this.setWarning(true);

    if (onChange) onChange({ [this.props.name]: value });
  };

  render = () => {
    const {
      autoComplete,
      className,
      componentClass,
      disabled,
      error,
      errorMessage,
      helpText,
      helpTextHidden,
      label,
      mask,
      maskChar,
      maxLength,
      minLength,
      name,
      pattern,
      required,
      t,
      value,
      warningText,
    } = this.props;
    const errorMessageText = this.state.errorMessage
      ? t(this.state.errorMessage)
      : t(errorMessage);
    const autocomplete = !!autoComplete ? autoComplete : 'on';

    return (
      <FormGroup
        aria-describedby={`${name}-text-input-help-div`}
        className='text-input'
        controlId={name}
        validationState={
          this.state.error || error
            ? 'error'
            : this.state.error === false
            ? 'success'
            : null
        }
      >
        {label ? <FormLabel>{t(label)}</FormLabel> : null}

        <FormControl
          autoComplete={autocomplete}
          autoFocus={false}
          className={className}
          as={componentClass}
          disabled={disabled}
          defaultValue={value}
          mask={mask}
          maskchar={maskChar}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          onBlur={this.onBlur}
          onChange={this.onChange}
          pattern={pattern}
          required={required}
          type='text'
          value={this.state.value}
        />
        <FormControl.Feedback />
        {this.state.error || error ? (
          <div role='alert' aria-live='assertive' className='error-message'>
            {errorMessageText}
          </div>
        ) : null}
        <div
          id={`${name}-text-input-help-div`}
          aria-live='polite'
          className={helpTextHidden ? 'visually-hidden' : 'help'}
        >
          {t(helpText, {
            maxLength: !!maxLength ? maxLength : this.maxStreetLength,
          })}
        </div>
        <div className='has-warning'>
          {this.state.warning ? t(warningText, { maxLength }) : ''}
        </div>
      </FormGroup>
    );
  };
}

TextInput.propTypes = {
  className: PropTypes.string,
  componentClass: PropTypes.func,
  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default TextInput;
