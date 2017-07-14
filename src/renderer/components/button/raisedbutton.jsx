import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The Button component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/buttons.html
 *          import Button from './components/button.jsx'
 *          <Button>Button text</Button>
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {boolean} animate - Whether or not a hover will trigger an animation
 * @property {function} onClick - The onclick event
 */
const Button = class Button extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.animate) {
            this.wavesAnimation = [materialize['waves-effect'], materialize['waves-light']];
        }
    }

    render() {
        return (
            <a className={classNames(materialize.btn, this.props.className, this.wavesAnimation)} onClick={this.props.onClick}>
                {this.props.children}
            </a>
        )
    }
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    animate: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;
