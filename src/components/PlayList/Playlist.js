import React, { useState } from "react";
import "./Playlist.css"
import Track from "../Track/Track";

function Playlist(props) {
    const { playlist } = props;

    return (
        <div className="playlistWrapper">
            <h2>Playlist</h2>
            <div>
                {playlist.length === 0 ? <p>Add a Song to your playlist.</p> : playlist.map((track) => {
                    return <Track key={track.id} songName={track.name} artistName={track.artist} albumName={track.album} playlist={props.playlist} />
                })}
            </div>
        </div>
    )
}

export default Playlist;
