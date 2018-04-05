import caseApi from '../api/caseApi';
import * as constants from './constants';
import React from 'react';
import ReactDOM from 'react-dom';

export function loadCases() {
  return function(dispatch) {
    return caseApi.getAllCases().then(cases => {
      dispatch(loadCasesSuccess(cases));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCaseTypes() {
  return function(dispatch) {
    let caseTypes = [];
    return caseApi.getCaseTypes().then(caseTypeList => {
      caseTypeList.forEach(element => {
        caseTypes.push(<option key={element.typeValue} value={element.typeValue}>{element.typeDesc}</option>);
      });
      dispatch(loadcaseTypesSuccess(caseTypes));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadCasesSuccess(cases) {  
  return {type:constants.LOAD_CASES_SUCCESS, cases};
}

export function loadcaseTypesSuccess(caseTypes) {
  return {
    type:constants.LOAD_CASE_TYPES_SUCCESS,
    caseTypes:caseTypes
  }
}