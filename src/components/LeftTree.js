import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {CaseSearchContainer} from './case/CaseSearchContainer';

export default class LeftTree extends React.Component {
    constructor(props) {
        super(props);
        this.loadCaseSearch = this.loadCaseSearch.bind(this);
    }

    loadPeopleSearch() {
        const browserHistory = createBrowserHistory();
        browserHistory.push('/peopleSearch');
    }

    loadCaseSearch() {
        ReactDOM.render(<CaseSearchContainer/>, document.getElementById('maincontent'));
    }

    render() {
        return (
            <div className="pageHeight">
                <ul className="listStyle">
                    <li onClick={this.loadCaseSearch}>Case</li>
                    <li onClick={this.loadPeopleSearch}>People</li>
                </ul>
            </div>
        )
    }
}