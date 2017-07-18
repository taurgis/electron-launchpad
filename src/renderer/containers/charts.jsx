import React from 'react';
import classNames from 'classnames';
import {PieChart, BarChart, LineChart} from 'react-easy-chart';

import Breadcrumb from '../components/breadcrumb';

import materialize from '../styles/vendor/materialize.scss';

class Cards extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb path='Charts' />
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s11, materialize['offset-l1'])}>
            <h2 className={materialize.header}>Chart examples</h2>
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4, materialize['offset-l1'])}>
            <PieChart
              labels
              data={[
                {key: 'A', value: 100},
                {key: 'B', value: 200},
                {key: 'C', value: 50}
              ]} styles={{
                '.chart_text': {
                  fontSize: '1em',
                  fill: '#fff'
                }
              }}
            />
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4)}>
            <PieChart
              labels
              innerHoleSize={200}
              data={[
                {key: 'A', value: 100, color: '#aaac84'},
                {key: 'B', value: 200, color: '#dce7c5'},
                {key: 'C', value: 50, color: '#e3a51a'}
              ]}
            />
          </div>
        </div>
        <div className={materialize.row}>
          <div className={classNames(materialize.col, materialize.s6, materialize.l5, materialize['offset-l1'])}>
            <BarChart
              axes
              height={300}
              data={[
                {
                  x: 'A',
                  y: 46
                },
                {
                  x: 'B',
                  y: 26
                }
              ]}
            />
          </div>
          <div className={classNames(materialize.col, materialize.s6, materialize.l4)}>
            <LineChart
              axes
              height={300}
              data={[
                [
                  {x: 1, y: 20},
                  {x: 2, y: 10},
                  {x: 3, y: 25}
                ], [
                  {x: 1, y: 10},
                  {x: 2, y: 12},
                  {x: 3, y: 4}
                ]
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Cards;
