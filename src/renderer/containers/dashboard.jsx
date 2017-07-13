import React from 'react';
import classNames from 'classnames';

import Card from '../components/card/card.jsx'
import CardTitle from '../components/card/cardtitle.jsx'
import CardImage from '../components/card/cardimage.jsx'
import CardContent from '../components/card/cardcontent.jsx'
import CardAction from '../components/card/cardaction.jsx'
import FaIcon from '../components/faicon.jsx';

import materialize from '../styles/vendor/materialize.scss';
import dashboard from '../styles/containers/dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4, materialize['offset-l1'])}>
            <Card>
              <CardImage image='images/sample-1.jpg' title='This is a title' />
              <CardContent>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </CardContent>
              <CardAction actions={[{ title: 'link 1', url: 'link url 1' }, { title: 'link 2', url: 'link url 2' }]} />
            </Card>
          </div>
        </div>
      </div>
    );
  }
};



export default Dashboard