import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import IntroListItem from '../../components/IntroListItem/IntroListItem';

export function IntroPage(props) {
  return (
    <div>
      <IntroListItem />
    </div>
  );
}


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    play :{}
  };
}

IntroPage.propTypes = {
  play : PropTypes.object.isRequired
};

export default connect(mapStateToProps)(IntroPage);
