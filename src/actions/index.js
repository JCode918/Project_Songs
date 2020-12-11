// Action Creator
export const selectSong = () => {
	// Returns an actioin
	return {
		type: 'SONG_SELECTED',
		payload: song,
	};
};

