import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) =>{

    if (!song){
        return <div>Select a song...</div>;
    }

    return(
        <div>
            <div className=""></div>
            <h3>Details</h3>
            <p>
                Title: {song.title}
                <br/>
                Duriation: {song.duration}
            </p>
        </div>
    )
};

const mapStateToProps = (state) =>{
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);