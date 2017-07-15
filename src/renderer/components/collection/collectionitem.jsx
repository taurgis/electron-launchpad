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
 */
const CollectionItem = class CollectionItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={classNames(materialize['collection-item'], this.props.className)}>
                {this.props.children}
            </li>
        )
    }
};

CollectionItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default CollectionItem;
