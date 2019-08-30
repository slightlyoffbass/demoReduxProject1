import { CombineReducers, combineReducers } from 'redux';

// Static List of Songs Reducer
const songsReducer = () => {
    return [
        {title: 'No Diggty', duration : '4:05'},
        {title: 'Free Bird', duration : '3:10'},
        {title: 'Bad Moon Risin', duration : '6:08'},
        {title: 'I Want it That way', duration : '1:35'}
    ]
}

const selectedSongReducer = (selectedSong=null,action ) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});