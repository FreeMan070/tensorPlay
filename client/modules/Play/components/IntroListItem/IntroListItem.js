import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './IntroListItem.css';

export class IntroListItem extends Component {
  render() {
    return (
      <ul>
        <li>Play1</li>
        <li>Play2</li>
        <li>Play3</li>
      </ul>
    );
  }
}

IntroListItem.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(IntroListItem);
