import React from "react";
import Track from "../Track/Track.js";
import trackLists from "../../trackData.js";

function Tracklist({ addToPlayList }) {
    return (
        trackLists.map((track) => {
            return <Track key={track.id} songName={track.name} artistName={track.artist} albumName={track.album} addToPlayList={addToPlayList} id={track.id} />
        })
    )
}

export default Tracklist;
