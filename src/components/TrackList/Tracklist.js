import React from "react";
import Track from "../Track/Track.js";


function Tracklist({ addToPlayList, userSearchResults }) {
    console.log(userSearchResults);
    return (
        userSearchResults.map((track, index) => {
            return <Track key={track.id} songName={track.name} artistName={track.artist} albumName={track.album} addToPlayList={addToPlayList} id={track.id} />
        })
    )
}




export default Tracklist;
