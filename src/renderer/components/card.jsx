import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../styles/vendor/materialize.scss';
import card from '../styles/components/card.scss';

const Card = class Card extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props['top-border-color']) {
      this.props['top-border-color'] = '#fff';
    }
  }

  render() {
    return (
      <div className={materialize.card} style={{
        borderTop: '3px solid ' + this.props['top-border-color']
      }}>
        <div className={classNames(materialize['card-content'], card['card-nobottompadding'])}>
          <span><this.props.content/></span>
        </div>
      </div>
    )
  }
};

export default Card;
