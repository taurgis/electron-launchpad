import PropTypes from 'prop-types';

import BaseTextInput from './basetextinput';

/**
 * @desc The TextInput component for forms (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/forms.html
 *          import { TextInput } from './components/form'
 *          <Form>
 *            <TextInput name="firstname" label="label" placeholder="placeholder" value="value" onChange="onChange()" />
 *          </Form>
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {string} id - The field ID
 * @property {string} name - The field name
 * @property {string} label - The input field label
 * @property {string} placeholder - The inputfield placeholder
 * @property {string} value - The input field value
 * @property {function} onChange - The function to execute when the field value changes
 */
const TextInput = class TextInput extends BaseTextInput {

};

TextInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
