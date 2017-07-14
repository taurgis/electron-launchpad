import React from 'react';
import classNames from 'classnames';

import { Card, CardTitle, CardStacked, CardImage, CardContent, CardAction } from '../components/card'
import FaIcon from '../components/faicon.jsx';

import materialize from '../styles/vendor/materialize.scss';
import dashboard from '../styles/containers/dashboard.scss';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s11, materialize['offset-l1'])}>
            <h2 className={materialize.header}>Card examples</h2>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4, materialize['offset-l1'])}>
            <Card>
              <CardImage image={require('../styles/images/sample-1.jpg')} title='This is a title' />
              <CardContent>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </CardContent>
              <CardAction actions={[{ title: 'link 1', url: 'link url 1' }, { title: 'link 2', url: 'link url 2' }]} />
            </Card>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l5)}>
            <Card className={materialize.horizontal}>
              <CardImage image={require('../styles/images/nature.jpg')} title='This is a title' />
              <CardStacked>
                <CardContent>
                  <p>I am a very simple card. I am good at containing small bits of information.</p>
                </CardContent>
                <CardAction actions={[{ title: 'link 1', url: 'link url 1' }]} />
              </CardStacked>
            </Card>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l5)}>
            <Card className={materialize.horizontal}>
              <CardStacked>
                <CardContent>
                  <p>I am a very simple card. I am good at containing small bits of information.</p>
                </CardContent>
                <CardAction actions={[{ title: 'link 1', url: 'link url 1' }]} />
              </CardStacked>
              <CardImage image={require('../styles/images/nature.jpg')} title='This is a title' />
            </Card>
          </div>
        </div>
      </div>
    );
  }
};

export default Cards