import React from 'react';
import classNames from 'classnames';

import {Card, CardContent} from '../components/card';
import FaIcon from '../components/faicon';
import Breadcrumb from '../components/breadcrumb';

import materialize from '../styles/vendor/materialize.scss';

class Dashboard extends React.Component {
  showAlertBox() {
    alert('I clicked something');
  }

  render() {
    return (
      <div>
        <Breadcrumb path='Dashboard' />
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l3, materialize['offset-l1'])}>
            <Card top-border-color='#FF5252'>
              <CardContent>
                <div className={classNames(materialize.col, materialize.s6)}>
                  <FaIcon color='#FF5252' code='exclamation-triangle' size={5} />
                </div>
                <div className={classNames(materialize.col, materialize.s6, materialize['right-align'])}>
                  <h6>26</h6>
                  <span>exceptions</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l3)}>
            <Card top-border-color='#F2B53F'>
              <CardContent>
                <div className={classNames(materialize.col, materialize.s6)}>
                  <FaIcon color='#F2B53F' code='bug' size={5} />
                </div>
                <div className={classNames(materialize.col, materialize.s6, materialize['right-align'])}>
                  <h6>12</h6>
                  <span>warnings</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l3)}>
            <Card top-border-color='#009688'>
              <CardContent>
                <div className={classNames(materialize.col, materialize.s6)}>
                  <FaIcon color='#009688' code='bug' size={5} />
                </div>
                <div className={classNames(materialize.col, materialize.s6, materialize['right-align'])}>
                  <h6>0</h6>
                  <span>debug messages</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
