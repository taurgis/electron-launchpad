import React from 'react';
import classNames from 'classnames';

import Breadcrumb from '../components/breadcrumb';
import {TextInput, PasswordInput, EmailInput} from '../components/form';

import materialize from '../styles/vendor/materialize.scss';

class Cards extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb path='Forms' />
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s11, materialize['offset-l1'])}>
            <h2 className={materialize.header}>Form example</h2>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4, materialize['offset-l1'])}>
            <form>
              <TextInput name="firstname" label="First name" />
              <EmailInput name="email" label="Email" />
              <PasswordInput name="passord" label="Password" />
            </form>
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4)} />
        </div>

      </div>
    );
  }
};

export default Cards;
