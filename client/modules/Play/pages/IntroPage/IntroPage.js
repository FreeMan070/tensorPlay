import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';


export function IntroPage(props) {
  return (
    <div>
      놀이페이지
    </div>
  );
}


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    play: {},
  };
}

IntroPage.propTypes = {
  play: {}
};

export default connect(mapStateToProps)(IntroPage);
