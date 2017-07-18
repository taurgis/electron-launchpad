import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CollectionHeader component, a part of the Collection component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/collections.html
 *          import { Collection, CollectionHeader } from './components/collection'
 *          <Collection>
 *              <CollectionHeader>
 *                  {your content}
 *              </CollectionHeader>
 *          </Collection
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {function} onClick - Function to call when the CollectionItem is clicked
 */
const CollectionHeader = class CollectionHeader extends React.Component {
  render() {
    return (
      <li onClick={this.props.onClick} className={classNames(materialize['collection-header'], this.props.className)}>
        <h4>{this.props.children}</h4>
      </li>
    );
  }
};

CollectionHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default CollectionHeader;
