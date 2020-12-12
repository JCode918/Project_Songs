import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
	renderedList() {
		return this.props.songs.map((song, index) => {
			return (
				<div className='item' key={index}>
					<div className='right floated content'>
						<button
							className='ui button'
							onClick={() => {
								this.props.selectSong(song);
							}}>
							Select
						</button>
					</div>
					<i className='music icon' />
					<div className='content'>
						<div className='header'>{song.title}</div>
						Duration: {song.duration}
					</div>
				</div>
			);
		});
	}
	render() {
		return <div className='ui celled list'>{this.renderedList()}</div>;
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
