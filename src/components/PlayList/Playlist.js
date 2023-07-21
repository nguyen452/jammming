import React, { useState, useEffect } from "react";
import "./Playlist.css"


function Playlist(props) {
    const { playlist, removeTrack, handleSendPlaylist } = props;

    const handleClick = () => {
        setPlaylistName(<input className="playlistInput" type="text" defaultValue="New Playlist" />);
    };

    const [playlistName, setPlaylistName] = useState(<h2 onClick={handleClick}>New Playlist</h2>);

    return (
        <div className="playlistWrapper">
            {playlistName}
            <div>
                {playlist.length === 0 ? <p className="defaultMessage">Add a Song to your playlist.</p> : playlist.map((track) => {
                    return (
                        <div className="trackWrapper" key={track.id}>
                            <div className="playListTrackInfo">
                                <h3>{track.name}</h3>
                                <p>{track.artist} | {track.album}</p>
                            </div>
                            <button className="removeTrackButton" onClick={(id) => {removeTrack(track.id)}}>-</button>
                        </div>
                    )
                })}
            </div>
            <button className="savePlaylistButton" type="submit" onClick={handleSendPlaylist} value={playlistName}>Save Playlist</button>
        </div>
    )
}

export default Playlist;
