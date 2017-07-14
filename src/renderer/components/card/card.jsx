import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';
import card from '../../styles/components/card.scss';

/**
 * @desc The card component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/cards.html
 *          import { Card } from './components/card'
 *          <Card>
 *            {your content}
 *          </Card>    
 * @param {*} props - React property object
 */
const Card = class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames(materialize.card, this.props.className)} style={{
        borderTop: (this.props['top-border-color']) ? ('3px solid ' + (this.props['top-border-color'])) : ''
      }}>
        {this.props.children}
      </div>
    )
  }
};

Card.propTypes = {
  children: PropTypes.node,
  'top-border-color': PropTypes.string,
  className: PropTypes.string
};

export default Card;
