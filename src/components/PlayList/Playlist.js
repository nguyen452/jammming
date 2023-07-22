import React from "react";
import "./Playlist.css"

function Playlist(props) {
    const { playlistName, setPlaylistName, playlist, removeTrack, handleSendPlaylist } = props;

    const handleChange = (event) => {
        setPlaylistName(event.target.value);
    };

    return (
        <div className="playlistWrapper">
            <input className="playlistInput" type= 'text' value={playlistName} onChange={handleChange}></input>
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
