import PropTypes from 'prop-types';
import React from 'react';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CardStacked component, an optional part the Card component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/cards.html
 *          import { Card, CardAction } from './components/card'
 *          <Card>
 *             <CardAction actions={[{ title: 'link 1', url: 'link url 1' }]}/>
 *          </Card>
 * @param {*} props - React property object
 * @property {array} props.actions - Array of JSON objects
 */
const CardAction = class CardAction extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.actions) {
      this.props.actions = [];
    } else {
      var counter = 0;
      this.props.actions.forEach(function(action) {
        action.key = 'Action ' + counter++;
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
    );
  }
};

CardAction.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.array
};

export default CardAction;
