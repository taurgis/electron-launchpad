import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

const CardTitle = class CardTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={materialize['card-title']}>
                {this.props.children}
            </span>
        )
    }
};

CardTitle.propTypes = {
    children: PropTypes.node,
};

export default CardTitle;
