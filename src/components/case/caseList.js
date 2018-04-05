import React, {PropTypes} from 'react';

const caseList = ({cases}) => {
    return(
        <ul className="list-group">
            {cases.map(caseItem=>
                <li className="list-group-item" key={caseItem.caseId}>
                    {caseItem.caseName}
                </li>
            )}
        </ul>
    );
};

caseList.propTypes = {
    cases : PropTypes.array.isRequired
};

export default caseList;