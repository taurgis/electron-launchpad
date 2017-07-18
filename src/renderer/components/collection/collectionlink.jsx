import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CollectionLink component, a part of the Collection component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/collections.html
 *          import { Collection, CollectionLink } from './components/collection'
 *          <Collection>
 *              <CollectionLink url="yourlink">
 *                  {your content}
 *              </CollectionLink>
 *          </Collection
 * @param {*} props - React property object
 * @property {string} className - Additional classes for the component
 * @property {string} url - The target of the CollectionLink
 * @property {function} onClick - Function to call when the CollectionItem is clicked
 */
const CollectionLink = class CollectionLink extends React.Component {
  render() {
    return (
      <a href={this.props.url} onClick={this.props.onClick} className={classNames(materialize['collection-item'], this.props.className)}>
        {this.props.children}
      </a>
    );
  }
};

CollectionLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func
};

export default CollectionLink;
