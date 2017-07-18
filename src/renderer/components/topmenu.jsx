import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import FaIcon from '../components/faicon';

import materialize from '../styles/vendor/materialize.scss';
import topmenu from '../styles/components/topmenu.scss';

const TopMenu = class TopMenu extends React.Component {
  render() {
    return (
      <nav className={topmenu['lp' + this.props.mainSizePadding]}>
        <div className={materialize['nav-wrapper']}>
          <ul className={classNames(materialize['hide-on-med-and-down'])}>
            <li>
              <a href="#">
                <span>
                  <FaIcon code='clock-o' color='#009688' container="span" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaIcon code='align-justify' color='#009688' container="span" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaIcon code='address-book-o' color='#009688' container="span" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaIcon code='clipboard' color='#009688' container="span" />
              </a>
            </li>
          </ul>
          <ul className={classNames(materialize['hide-on-med-and-down'], materialize.right)}>
            <li>
              <div className={topmenu['user-badge']}>
                <span>Welcome Jane Doe</span>
                <img src="images/yuna.jpg" alt="Contact Person" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

TopMenu.propTypes = {
  mainSizePadding: PropTypes.number
};

export default TopMenu;
