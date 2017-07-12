import React from 'react';
import classNames from 'classnames';

import Card from '../components/card.jsx'
import FaIcon from '../components/faicon.jsx';

import materialize from '../styles/vendor/materialize.scss';
import dashboard from '../styles/containers/dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  createFaIconCard(icon, color, title, description) {
    return () => {
      return (
        <div className={materialize.row}>
          <div className={[materialize.col, materialize.s6].join(' ')}>
            <FaIcon color={color} code={icon} size={5}/>
          </div>
          <div className={[materialize.col, materialize.s6, materialize['right-align']].join(' ')}>
            <h6>{title}</h6>
            <span>{description}</span>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l3, materialize['offset-l1'])}>
            <Card content={this.createFaIconCard('exclamation-triangle', '#FF5252', '6', 'exceptions')} top-border-color='#FF5252'/>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l3)}>
            <Card content={this.createFaIconCard('bug', '#F2B53F', '23', 'warnings')} top-border-color='#F2B53F'/>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l3)}>
            <Card content={this.createFaIconCard('bug', '#009688', '0', 'debug messages')} top-border-color='#009688'/>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard
