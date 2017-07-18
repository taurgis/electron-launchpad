import PropTypes from 'prop-types';
import React from 'react';

import FloatingButton from './floatingbutton';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The FixedButton component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/buttons.html
 *          import FixedButton from './components/fixedbutton'
 *          <FixedButton>Button text</FixedButton>
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {boolean} animate - Whether or not a hover will trigger an animation
 * @property {function} onClick - The onclick event
 */
const FixedButton = class FixedButton extends React.Component {
  render() {
    return (
      <div className={materialize['fixed-action-btn']}>
        <FloatingButton className={this.props.className} animate={this.props.animate} onClick={this.props.onClick}>
          {this.props.children}
        </FloatingButton>
      </div>
    );
  }
};

FixedButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  animate: PropTypes.bool,
  onClick: PropTypes.func
};

export default FixedButton;
