import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import materialize from './styles/vendor/materialize.scss';
import main from './styles/main.scss';
import leftmenu from './styles/components/leftmenu.scss';

import LeftMenu from './components/leftmenu.jsx'
import TopMenu from './components/topmenu.jsx'
import Breadcrumb from './components/breadcrumb.jsx'
import FaIcon from './components/faicon.jsx';

import Dashboard from './containers/dashboard.jsx'
import Cards from './containers/cards.jsx'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      leftMenuSize: 'large',
      mainSizePadding: 300,
      path: 'Dashboard'
    }
  }
  render() {
    var loadingLocation = location.pathname.replace('%20', ' ');
    console.log(loadingLocation);
    return (
      <Router history={this.hashHistory}>
        <div>

          <header>
            <LeftMenu leftMenuSize={this.state.leftMenuSize}>
              <li>
                <img className={leftmenu.brandLogo} src='images/logo.svg' />
              </li>
              <li>
                <Link to={loadingLocation}>
                  <FaIcon code='dashboard' size={1} color='#fff' />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to={'/cards'}>
                  <FaIcon code='recycle' size={1} color='#fff' />
                  <span>Components</span>
                </Link>
              </li>
              <li>
                <a href='#'>
                  <FaIcon code='address-book-o' size={1} color='#fff' />
                  <span>Forms</span>
                </a>
              </li>
            </LeftMenu>
            <TopMenu switchLeftMenuSize={this.switchSize.bind(this)} mainSizePadding={this.state.mainSizePadding} />
          </header>

          <main className={main['lp' + this.state.mainSizePadding]}>
            <Breadcrumb path={this.state.path} />
            <Route path={loadingLocation} exact={true} component={Dashboard} />
            <Route path='/cards' component={Cards} />
          </main>

        </div>
      </Router>
    );
  }

  switchSize() {
    if (this.state.leftMenuSize === 'large') {
      this.setState({ leftMenuSize: 'small', mainSizePadding: 100, path: this.state.path });
    } else {
      this.setState({ leftMenuSize: 'large', mainSizePadding: 300, path: this.state.path });
    }

    console.log(this.leftMenuSize);
  }
};

export default Main
