import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CollectionItem component, a part of the Collection component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/collections.html
 *          import { Collection, CollectionItem } from './components/collection'
 *          <Collection>
 *              <CollectionItem>
 *                  {your content}
 *              </CollectionItem>
 *              <CollectionItem>
 *                  {your content}
 *              </CollectionItem>
 *          </Collection
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {function} onClick - Function to call when the CollectionItem is clicked
 */
const CollectionItem = class CollectionItem extends React.Component {
  render() {
    return (
      <li onClick={this.props.onClick} className={classNames(materialize['collection-item'], this.props.className)}>
        {this.props.children}
      </li>
    );
  }
};

CollectionItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default CollectionItem;
