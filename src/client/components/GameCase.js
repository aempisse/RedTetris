import React from "react"
import { connect } from "react-redux";


const mapStateToProps = (state, id) => {
	var color;
	var img

	if (state.CaseState[id.lgn][id.col] == 0){
		color = 'white';
		img = 'none';
	}
	else if (state.CaseState[id.lgn][id.col] == 1){
		color = 'blue';
		img = 'none'
	}
	else{
		color = 'gray';
		img = 'none'
	}
	return ({ actualState: state.CaseState[id.lgn][id.col],
			  caseColor: color,
			  caseImg: img});
};

const GameCase = ({actualState, caseColor, caseImg}) => {
	console.log(caseImg)
	return (
		<div>
			<div className="col-sm-1" style={{height: '50px' , backgroundColor: caseColor, backgroundImage: caseImg}}></div>
		</div>
	)
}

export default connect(mapStateToProps)(GameCase);