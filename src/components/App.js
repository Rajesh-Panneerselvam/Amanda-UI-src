import React, {PropTypes} from 'react';  
import HeaderComp from './HeaderComp';
import LeftTree from './LeftTree'

export default class App extends React.Component {
	
	render() {
		return (
			<div className="container-fluid pageHeight">
				<div className="row pageHeight">
					<div className="col-md-2 bg-primary text-white pageHeight">
						<LeftTree/>
					</div>
					<div className="col-md-10 pageHeight">
						<HeaderComp/>
					</div>
				</div>
			</div>
		);
	}
}

/**App.propTypes = {
	children: PropTypes.object.isRequired
};*/