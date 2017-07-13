import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

const CardAction = class CardAction extends React.Component {
    constructor(props) {
        super(props);

        if (!this.props.actions) {
            this.props.actions = [];
        } else {
            var counter = 0;
            this.props.actions.forEach(function (action) {
                action.key = "Action " + counter++;
            }, this);
        }
    }

    render() {
        return (
            <div className={materialize['card-action']}>
                {this.props.actions.map((actionButton, index) => (
                    <a key={actionButton.key} href={actionButton.url}>{actionButton.title}</a>
                ))}
                {this.props.children}
            </div>
        )
    }
};

CardAction.propTypes = {
    children: PropTypes.node,
    actions: PropTypes.array
};

export default CardAction;
