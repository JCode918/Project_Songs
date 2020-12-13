import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
	if (props.selectedSong) {
		return (
			<div className='ui segment'>
				<h1 className='ui top attached header'>Details For:</h1>
				<div className='ui attached segment'>
					<h3>Title: {props.selectedSong.title}</h3>
					<h3>Duration: {props.selectedSong.duration}</h3>
				</div>
			</div>
		);
	} else {
		return (
			<div className='ui clearing segment'>
				<h2 className='ui center aligned header'>Select a Song</h2>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	console.log(state);
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
