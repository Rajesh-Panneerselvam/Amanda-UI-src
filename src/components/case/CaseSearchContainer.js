import React from 'react';
import ReactDOM from 'react-dom';
import {loadCaseTypes} from '../../actions/caseAction';
import { connect } from 'react-redux';
import CaseSearchComponent from './CaseSearchComponent';
import configureStore from '../../store/configureStore';
import { bindActionCreators } from 'redux';


const store = configureStore();

export class CaseSearchContainer extends React.Component {

    componentDidMount() {
        //store.dispatch(loadCaseTypes());
        this.props.getCaseTypes();
    }

    render() {
        return(<CaseSearchComponent/>);
    }
}

const mapStateToProps = state => {
    return {
       caseTypes: state.caseTypes,
    };
 };
 
const mapDispatchToProps = dispatch => {
    return {
        getCaseTypes: () => dispatch(loadCaseTypes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseSearchContainer);