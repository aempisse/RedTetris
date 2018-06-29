import React, { Component } from "react";
import { connect } from "react-redux";
import { moveLeft } from '../actions/moveLeft.js'


const mapDispatchToProps = dispatch => {
	return ({
		moveLeft: () => dispatch(moveLeft())
	});
};

const MoveLeft = ({moveLeft}) => {
	return (
		<div style={{marginLeft: '5%'}}>
			<button style={{backgroundColor: 'gray'}} onClick={moveLeft}>Le Tetriminos Move Left</button>
		</div>
	);
}


export default connect(null, mapDispatchToProps)(MoveLeft);