import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The FloatingButton component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/buttons.html
 *          import FloatingButton from './components/floatingbutton'
 *          <FloatingButton>Button text</FloatingButton>
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {boolean} animate - Whether or not a hover will trigger an animation
 * @property {function} onClick - The onclick event
 */
const FloatingButton = class FloatingButton extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.animate) {
      this.wavesAnimation = [materialize['waves-effect'], materialize['waves-light']];
    }
  }

  render() {
    return (
      <button className={classNames(materialize['btn-floating'], this.props.className, this.wavesAnimation)} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
};

FloatingButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  animate: PropTypes.bool,
  onClick: PropTypes.func
};

export default FloatingButton;
