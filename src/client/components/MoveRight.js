import React, { Component } from "react";
import { connect } from "react-redux";
import { moveRight } from '../actions/moveRight.js'


const mapDispatchToProps = dispatch => {
	return ({
		moveRight: () => dispatch(moveRight())
	});
};

const MoveRight = ({moveRight}) => {
	return (
		<div style={{marginLeft: '5%'}}>
			<button style={{backgroundColor: 'gray'}} onClick={moveRight}>Le Tetriminos Move Right</button>
		</div>
	);
}


export default connect(null, mapDispatchToProps)(MoveRight);