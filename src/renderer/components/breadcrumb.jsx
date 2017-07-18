import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import FaIcon from './faicon';

import materialize from '../styles/vendor/materialize.scss';
import breadcrumb from '../styles/components/breadcrumb.scss';

const Breadcrumb = class Breadcrumb extends React.Component {
  render() {
    return (
      <div className={breadcrumb.breadcrumb}>
        <div className={materialize.row}>
          <p className={classNames(materialize.col, materialize.s11, materialize['offset-s1'], breadcrumb.middle)}>
            <FaIcon code='home' size={1} color='#999' />
            <span>
              /
            </span>
            <a href="#!" className={classNames(breadcrumb['breadcrumb-link'])}>{this.props.path}</a>
          </p>
        </div>
      </div>
    );
  }
};

Breadcrumb.propTypes = {
  path: PropTypes.string
};

export default Breadcrumb;
