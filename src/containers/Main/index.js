import React from 'react';
// import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Wrapper,
} from './components';

function Main() {
  return (
    <Wrapper>
      Main
    </Wrapper>
  );
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({

  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);