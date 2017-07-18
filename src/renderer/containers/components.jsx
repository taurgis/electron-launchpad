import React from 'react';
import classNames from 'classnames';

import {Card, CardStacked, CardImage, CardContent, CardAction} from '../components/card';
import {RaisedButton, FloatingButton, FixedButton} from '../components/button';
import {Collection, CollectionItem, CollectionHeader, CollectionLink} from '../components/collection';
import CardPanel from '../components/cardpanel.jsx';
import FaIcon from '../components/faicon.jsx';
import Breadcrumb from '../components/breadcrumb';

import materialize from '../styles/vendor/materialize.scss';

class Cards extends React.Component {
  showAlertBox() {
    alert('I clicked something');
  }

  render() {
    return (
      <div>
        <Breadcrumb path='Components' />
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
              <CardAction actions={[{title: 'link 1', url: 'link url 1'}, {title: 'link 2', url: 'link url 2'}]} />
            </Card>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l5)}>
            <Card className={materialize.horizontal}>
              <CardImage image={require('../styles/images/nature.jpg')} title='This is a title' />
              <CardStacked>
                <CardContent>
                  <p>I am a very simple card. I am good at containing small bits of information.</p>
                </CardContent>
                <CardAction actions={[{title: 'link 1', url: 'link url 1'}]} />
              </CardStacked>
            </Card>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l5)}>
            <Card className={materialize.horizontal}>
              <CardStacked>
                <CardContent>
                  <p>I am a very simple card. I am good at containing small bits of information.</p>
                </CardContent>
                <CardAction actions={[{title: 'link 1', url: 'link url 1'}]} />
              </CardStacked>
              <CardImage image={require('../styles/images/nature.jpg')} title='This is a title' />
            </Card>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s11, materialize['offset-l1'])}>
            <h2 className={materialize.header}>Card-panel examples</h2>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4, materialize['offset-l1'])}>
            <CardPanel>
              I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            </CardPanel>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l5)}>
            <CardPanel className={materialize.teal}>
              <span style={{color: 'white'}}>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
              </span>
            </CardPanel>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s11, materialize['offset-l1'])}>
            <h2 className={materialize.header}>Button examples</h2>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s2, materialize.l2, materialize['offset-l1'])}>
            <p><RaisedButton animate onClick={this.showAlertBox}>A button</RaisedButton></p>
            <p><RaisedButton animate onClick={this.showAlertBox} className={materialize.red}>A button</RaisedButton></p>
            <p><RaisedButton animate onClick={this.showAlertBox}>An icon <FaIcon code='send' color='#fff' className={materialize.right} /></RaisedButton></p>
            <p><RaisedButton animate onClick={this.showAlertBox} className={materialize.disabled}>disabled <FaIcon code='send' color='#fff' className={materialize.right} /></RaisedButton></p>
          </div>
          <div className={classNames(materialize.col, materialize.s2, materialize.l1)}>
            <FloatingButton animate onClick={this.showAlertBox} className={materialize.red}><FaIcon code='plus' color='#fff' /></FloatingButton>
            <FixedButton animate onClick={this.showAlertBox} className={materialize.red}><FaIcon code='plus' color='#fff' /></FixedButton>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s11, materialize['offset-l1'])}>
            <h2 className={materialize.header}>Collection examples</h2>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s10, materialize['offset-l1'])}>
            <Collection className={materialize['with-header']}>
              <CollectionHeader>Header</CollectionHeader>
              <CollectionItem>Collection Item</CollectionItem>
              <CollectionLink onClick={this.showAlertBox}>This is a link collection item</CollectionLink>
              <CollectionItem className={materialize.avatar}>
                <FaIcon className={materialize.circle} code="folder" />
                <span className={materialize.title}>Title</span>
                <p>First Line <br />
                  Second Line
                </p>
                <a href="#!" className={materialize['secondary-content']}><FaIcon code='star' /></a>
              </CollectionItem>
            </Collection>
          </div>
        </div>
      </div>
    );
  }
};

export default Cards;
