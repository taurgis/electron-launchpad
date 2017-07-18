import PropTypes from 'prop-types';
import React from 'react';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CardContent component, an optional part the card component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/cards.html
 *          import { Card, CardContent } from './components/card'
 *          <Card>
 *             <CardContent>
 *                {Your HTML}
 *             </CardContent>
 *          </Card>
 * @param {*} props - React property object
 */
const CardContent = class CardContent extends React.Component {
  render() {
    return (
      <div className={materialize['card-content']} style={{paddingBottom: '1px'}}>
        <div className={materialize.row}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

CardContent.propTypes = {
  children: PropTypes.node,
};

export default CardContent;
