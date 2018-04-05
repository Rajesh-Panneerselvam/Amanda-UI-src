import React from 'react';

export default class CaseSearchComponent extends React.Component {

    componentWillMount() {
        this.caseRequest = {
            caseNumber:'',
            caseType:'',
            caseName:'',
            assignedTo:'',
            resolutionDate:''
        }
    }

    render() {
        return(
            <form>
                <h2>Case Search</h2>
                <div className="row">
                    <label className="col-md-6">Case Number:
                        <input type="number" defaultValue={this.caseRequest.caseNumber}/>
                    </label>
                    <label className="col-md-6">Case Type:
                        <select defaultValue={this.caseRequest.caseType}>
                            {this.props.caseTypes}
                        </select>
                    </label>
                </div>
                <div className="row">
                    <label className="col-md-6">Case Name:
                        <input type="text" defaultValue={this.caseRequest.caseName}/>
                    </label>
                    <label className="col-md-6">Assigned To:
                        <select defaultValue={this.caseRequest.assignedTo}>
                            
                        </select>
                    </label>
                </div>
            </form>
        );
    }
}