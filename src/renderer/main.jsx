import React from 'react';

import materialize from './styles/vendor/materialize.scss';
import main from './styles/main.scss';

import LeftMenu from './components/leftmenu.jsx'
import TopMenu from './components/topmenu.jsx'
import Breadcrumb from './components/breadcrumb.jsx'

import Dashboard from './containers/dashboard.jsx'

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
    return (
      <div>
        <header>
          <LeftMenu leftMenuSize={this.state.leftMenuSize}/>
          <TopMenu switchLeftMenuSize={this.switchSize.bind(this)} mainSizePadding={this.state.mainSizePadding}/>
        </header>
        <main className={main['lp' + this.state.mainSizePadding]}>
          <Breadcrumb path={this.state.path} />
          <Dashboard />
        </main>
      </div>
    );
  }

  switchSize() {
    if (this.state.leftMenuSize === 'large') {
      this.setState({leftMenuSize: 'small', mainSizePadding: 100, path: this.state.path});
    } else {
      this.setState({leftMenuSize: 'large', mainSizePadding: 300, path: this.state.path});
    }

    console.log(this.leftMenuSize);
  }
};

export default Main
