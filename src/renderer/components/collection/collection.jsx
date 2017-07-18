import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The Collection component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/collections.html
 *          import { Collection } from './components/collection'
 *          <Collection>
 *            {your content (li)}
 *          </Collection>
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 */
const Collection = class Collection extends React.Component {
  render() {
    return (
      <ul className={classNames(materialize.collection, this.props.className)}>
        {this.props.children}
      </ul>
    );
  }
};

Collection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Collection;
