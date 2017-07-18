import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import main from './styles/main.scss';
import leftmenu from './styles/components/leftmenu.scss';

import LeftMenu from './components/leftmenu';
import TopMenu from './components/topmenu';
import FaIcon from './components/faicon';

import Dashboard from './containers/dashboard';
import Components from './containers/components';
import Charts from './containers/charts';
import Forms from './containers/forms';

class Main extends React.Component {
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
                <Link to={'/charts'} >
                  <FaIcon code='bar-chart' size={1} color='#fff' />
                </Link>
              </li>
              <li>
                <Link to={'/forms'} >
                  <FaIcon code='check-square-o' size={1} color='#fff' />
                </Link>
              </li>
            </LeftMenu>
            <TopMenu />
          </header>

          <main>
            <Route path={loadingLocation} exact component={Dashboard} />
            <Route path='/components' component={Components} />
            <Route path='/charts' component={Charts} />
            <Route path='/forms' component={Forms} />
          </main>

        </div>
      </Router>
    );
  }
};

export default Main;
