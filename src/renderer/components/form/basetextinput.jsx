import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The BaseTextInput component which is used as a basis for all text components (MaterializeCSS project)
 *
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {string} id - The field ID
 * @property {string} name - The field name
 * @property {string} label - The input field label
 * @property {string} placeholder - The inputfield placeholder
 * @property {string} value - The input field value
 * @property {function} onChange - The function to execute when the field value changes
 */
const BaseTextInput = class BaseTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.type = 'text';

    this.state = {
      activeClass: (this.props.value && this.props.value.length > 0) ? materialize.active : '',
      value: this.props.value
    };
  }

  onFocus(e) {
    this.setState({activeClass: materialize.active});
  }

  onBlur(e) {
    if (!(this.state.value && this.state.value.length > 0)) { this.setState({activeClass: ''}); }
  }

  onChange(e) {
    if (e && e.target) {
      this.setState({value: e.target.value});
    }

    if (this.props.onChange) {
      return this.props.onChange(e);
    }
  }

  render() {
    const handleChange = (e) => this.onChange(e);
    const handleOnFocus = (e) => this.onFocus(e);
    const handleOnBlur = (e) => this.onBlur(e);
    return (
      <div className={classNames(materialize['input-field'], this.props.className)}>
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          id={this.props.id}
          type={this.type}
          className={classNames(materialize.validate)}
          onChange={handleChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={this.state.value} />
        <label className={this.state.activeClass} htmlFor={this.props.name}>{this.props.label}</label>
      </div>
    );
  }
};

BaseTextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default BaseTextInput;
