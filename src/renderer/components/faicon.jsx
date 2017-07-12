import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import icon from '../styles/icon.scss'

const FaIcon = ({code, size, color, container}) => {
  switch (container) {
    case 'span':
      return (
        <span style={{
          color: color
        }} className={classNames(icon.fa, icon['fa-' + code], icon['fa-' + size + 'x'])}></span>
      )
    default:
      return (
        <i style={{
          color: color
        }} className={classNames(icon.fa, icon['fa-' + code], icon['fa-' + size + 'x'])}></i>
      )
  }

};

FaIcon.propTypes = {
  code: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string.isRequired,
  container: PropTypes.string
};

export default FaIcon;
