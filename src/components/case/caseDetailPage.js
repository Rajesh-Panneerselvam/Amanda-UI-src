import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';

export class caseDetailPage extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.caseDet.caseId}</h1>
        <p>case type: {this.props.caseDet.caseType}</p>
        <p>case name: {this.props.caseDet.caseName}</p>
        <p>created by: {this.props.caseDet.createdBy}</p>
      </div>
    )
  }
}

caseDetailPage.propTypes = {  
  caseDet: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {  
  let caseDet = {caseId: '', caseType: '', caseName: '', createdBy: ''};
  const caseId = ownProps.params.caseId;
  if (state.cases.length > 0) {
    caseDet = Object.assign({}, state.cases.find(caseDet => caseDet.id == caseId))
  }
  return {caseDet: caseDet};
};

export default connect(mapStateToProps)(caseDetailPage);