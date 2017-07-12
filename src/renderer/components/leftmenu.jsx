import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import FaIcon from '../components/faicon.jsx';

import materialize from '../styles/vendor/materialize.scss';
import leftmenu from '../styles/components/leftmenu.scss';

const LeftMenu = class LeftMenu extends React.Component {
  render() {
    return (
      <div>
        <ul className={[
          materialize['side-nav'],
          materialize.fixed,
          leftmenu['side-nav'],
          materialize['show-on-large'],
          leftmenu[this.props.leftMenuSize]
        ].join(' ')}>
          <li>
            <img className={leftmenu.brandLogo} src='images/logo.svg'/>
          </li>
          <li>
            <a href='#'>
              <FaIcon code='dashboard' size={1} color='#fff'/>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <FaIcon code='recycle' size={1} color='#fff'/>
              <span>Components</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <FaIcon code='address-book-o' size={1} color='#fff'/>
              <span>Forms</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
};

export default LeftMenu;
