import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

const CardContent = class CardContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={materialize['card-content']} style={{ paddingBottom: '1px' }}>
                <div className={materialize.row}>
                    {this.props.children}
                </div>
            </div>
        )
    }
};

CardContent.propTypes = {
    children: PropTypes.node,
};

export default CardContent;
