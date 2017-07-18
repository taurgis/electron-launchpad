import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../styles/vendor/materialize.scss';
import leftmenu from '../styles/components/leftmenu.scss';

const LeftMenu = class LeftMenu extends React.Component {
  render() {
    return (
      <div>
        <ul className={classNames(materialize['side-nav'], materialize.fixed, leftmenu['side-nav']
          , materialize['show-on-large'], leftmenu[this.props.leftMenuSize])}>
          {this.props.children}
        </ul>
      </div>
    );
  }
};

LeftMenu.propTypes = {
  children: PropTypes.node,
  leftMenuSize: PropTypes.number
};

export default LeftMenu;
