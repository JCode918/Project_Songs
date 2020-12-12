import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: 'No Scrubs',
			duration: '4:05',
		},
		{
			title: 'Macerana',
			duration: '2:02',
		},
		{
			title: 'All Star',
			duration: '3:47',
		},
		{
			title: 'September',
			duration: '5:01',
		},
		{
			title: 'El Shaddai',
			duration: '4:44',
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
