import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';
import card from '../../styles/components/card.scss';

const Card = class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={materialize.card} style={{
        borderTop: (this.props['top-border-color']) ? ('3px solid ' + (this.props['top-border-color'])) : '' 
      }}>
        {this.props.children}
      </div>
    )
  }
};

Card.propTypes = {
  children: PropTypes.node,
  'top-border-color': PropTypes.string
};

export default Card;
