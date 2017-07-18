import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import icon from '../styles/icon.scss';

const FaIcon = class FaIcon extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.container) {
      this.Container = 'i';
    } else {
      this.Container = this.props.container;
    }
  }

  render() {
    return (
      <this.Container style={{
        color: this.props.color
      }} className={classNames(icon.fa, icon['fa-' + this.props.code], ((this.props.size) ? icon['fa-' + this.props.size + 'x'] : ''), this.props.className)} />
    );
  }
};

FaIcon.propTypes = {
  code: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  container: PropTypes.string,
  className: PropTypes.string
};

export default FaIcon;
