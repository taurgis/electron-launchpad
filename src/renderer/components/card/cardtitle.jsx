import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CardTitle component, an optional part the Card component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/cards.html
 *          import { Card, CardTitle } from './components/card'
 *          <Card>
 *             <CardTitle>
 *               My title
 *             </CardTitle>
 *          </Card>
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 */
const CardTitle = class CardTitle extends React.Component {
  render() {
    return (
      <span className={classNames(materialize['card-title'], this.props.className)}>
        {this.props.children}
      </span>
    );
  }
};

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardTitle;
