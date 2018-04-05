import React from 'react';
import ReactDOM from 'react-dom';
import caseAction from '../../actions/caseAction';
import { connect } from 'react-redux';
import caseSearchComponent from './caseSearchComponent';



export class PeopleSearch extends React.Component {
    componentWillMount() {
        caseAction.loadCaseTypes();
    }
}

let caseTypes = [];

function mapStateToProps(state, ownProps) {
    return {caseTypes: state.caseTypes};
}

ReactDOM.render(<caseSearchComponent caseTypes={caseTypes}/>, document.getElementById('casecomponent'));

export default connect(mapStateToProps)(caseSearchContainer);