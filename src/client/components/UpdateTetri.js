import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTetri } from '../actions/update_tetri.js'


const mapDispatchToProps = dispatch => {
	return ({
		updateTetri: () => dispatch(updateTetri())
	});
};

const UpdateTetri = ({updateTetri}) => {
	return (
		<div style={{marginLeft: '5%'}}>
			<button style={{backgroundColor: 'gray'}} onClick={updateTetri}>Le Tetriminos Update</button>
		</div>
	);
}


export default connect(null, mapDispatchToProps)(UpdateTetri);