export default class CaseApi {  
  static getAllCases() {
    return fetch('http://localhost:8080/case/cases').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCaseTypes() {
    let caseTypes = [];
    return fetch('http://localhost:8080/case/getAllCaseTypes').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    }
    )
    return caseTypes;
  }
}