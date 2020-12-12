import React from 'react';
import SongList from './SongList';

const App = () => {
	return (
		<div className='ui container grid'>
			<div className='ui row'>
				<div className='column eight wide'>
					<SongList />
				</div>
				<div className='column eight wide'>
					Selected Song List Area
				</div>
			</div>
		</div>
	);
};

export default App;
