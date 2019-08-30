import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends React.Component{
    // helper method
    renderList(){
        return this.props.songs.map((song)=>{
            //return for mapping function
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={()=>{this.props.selectSong(song)}} 
                            className="ui button primary">
                                Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="ui divided list">{this.renderList()}</div>
            );
    }
}
// take state object and copy it to props
// state = all data in redux store
const mapStateToProps = state => {
    console.log("mapStateToProps...")
    console.log(state);
   
    // pull songs object from state 
    return { songs: state.songs };
}   

// connect is returning a function()
// pass selectSong through connect
export default connect(mapStateToProps, { selectSong })(SongList);