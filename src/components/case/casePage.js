import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as caseAction from '../../actions/caseAction';
import caseList from './caseList';

class casePage extends React.Component {
  render() {
    return(
      <div className="col-md-12">
        <h1>Cases</h1>
        <div className="col-md-4">
          <caseList cases={this.props.cases} />
        </div>
      </div>
    )
  }
}


casePage.propTypes = {
    cases:PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return { cases:state.cases };
} 

export default connect(mapStateToProps)(casePage);