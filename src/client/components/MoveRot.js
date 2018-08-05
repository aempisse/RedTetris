import React, { Component } from "react";
import { connect } from "react-redux";
import { moveRot } from '../actions/moveRot.js'


const mapDispatchToProps = dispatch => {
	return ({
		moveRot: () => dispatch(moveRot())
	});
};

const MoveRot = ({moveRot}) => {
	return (
		<div style={{marginLeft: '5%'}}>
			<button style={{backgroundColor: 'gray'}} onClick={moveRot}>Le Tetriminos Fait Une Rotation</button>
		</div>
	);
}


export default connect(null, mapDispatchToProps)(MoveRot);