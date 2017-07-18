import PropTypes from 'prop-types';
import React from 'react';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CardStacked component, an optional part the card component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/cards.html#horizontal
 *          import { Card, CardImage, CardStacked, CardContent, CardAction } from './components/card'
 *          <Card className='horizontal'>
 *            <CardImage />
 *            <CardStacked>
 *              <CardContent />
 *              <CardAction />
 *            </CardStacked>
 *          </Card>
 * @param {*} props - React property object
 */
const CardStacked = class CardStacked extends React.Component {
  render() {
    return (
      <div className={materialize['card-stacked']}>
        {this.props.children}
      </div>
    );
  }
};

CardStacked.propTypes = {
  children: PropTypes.node,
};

export default CardStacked;
