import PropTypes from 'prop-types';
import React from 'react';

import materialize from '../../styles/vendor/materialize.scss';

/**
 * @desc The CardImage component, an optional part the Card component (MaterializeCSS project)
 * @example An example can be found here: http://materializecss.com/cards.html
 *          import { Card, CardImage } from './components/card'
 *          <Card>
 *             <CardImage image='http://.../image.jpg' title='My image title' />
 *          </Card>
 * @param {*} props - React property object
 * @property {string} image - The image URL
 * @property {string} title - The title to appear on the image
 */
const CardImage = class CardImage extends React.Component {
  render() {
    return (
      <div className={materialize['card-image']}>
        <img src={this.props.image} />
        <span className={materialize['card-title']}>{this.props.title}</span>
        {this.props.children}
      </div>
    );
  }
};

CardImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ]),

  children: PropTypes.node,
};

export default CardImage;
