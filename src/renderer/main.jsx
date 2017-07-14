import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import classNames from 'classnames';

import materialize from './styles/vendor/materialize.scss';
import main from './styles/main.scss';
import leftmenu from './styles/components/leftmenu.scss';

import LeftMenu from './components/leftmenu.jsx'
import TopMenu from './components/topmenu.jsx'
import FaIcon from './components/faicon.jsx';

import Dashboard from './containers/dashboard.jsx'
import Components from './containers/components.jsx'


class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var loadingLocation = location.pathname.replace('%20', ' ');

    return (
      <Router history={this.hashHistory}>
        <div>

          <header>
            <LeftMenu>
              <li>
                <img className={leftmenu.brandLogo} src='images/logo.png' />
              </li>
              <li>
                <Link to={loadingLocation}>
                  <FaIcon code='dashboard' size={1} color='#fff' />
                </Link>
              </li>
              <li>
                <Link to={'/components'} >
                  <FaIcon code='recycle' size={1} color='#fff' />
                </Link>
              </li>
              <li>
                <a href='#'>
                  <FaIcon code='address-book-o' size={1} color='#fff' />
                </a>
              </li>
            </LeftMenu>
            <TopMenu />
          </header>

          <main>
            <Route path={loadingLocation} exact={true} component={Dashboard} />
            <Route path='/components' component={Components} />
          </main>

        </div>
      </Router>
    );
  }
};

export default Main
