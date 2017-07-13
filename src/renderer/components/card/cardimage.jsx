import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

const CardImage = class CardImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={materialize['card-image']}>
                <img src={this.props.image} />
                <span className={materialize['card-title']}>{this.props.title}</span>
                {this.props.children}
            </div>
        )
    }
};

CardImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
    ]),

    children: PropTypes.node,
};

export default CardImage;
