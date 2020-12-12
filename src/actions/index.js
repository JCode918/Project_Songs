// Action Creator
export const selectSong = (song) => {
	// Returns an actioin
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

