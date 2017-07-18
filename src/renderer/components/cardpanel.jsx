import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../styles/vendor/materialize.scss';

/**
 * @desc The CardPanel component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/cards.html
 *          import CardPanel from './components/cardpanel.jsx'
 *          <CardPanel className='teal'>
 *            {your content}
 *          </CardPanel>
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 */
const CardPanel = class CardPanel extends React.Component {
  render() {
    return (
      <div className={classNames(materialize['card-panel'], this.props.className)}>
        {this.props.children}
      </div>
    );
  }
};

CardPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardPanel;
