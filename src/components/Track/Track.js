import React, { useState } from "react";
import "./Track.css";

function Track(props) {
    const {songName, artistName, albumName, id, addToPlayList} = props;
    const handleAdd = () => {
        addToPlayList(id);
    };

    return (
        <div className="trackWrapper" key={id}>
            <div className="trackInfo">
                <h3>{songName}</h3>
                <p>{artistName} | {albumName}</p>
            </div>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}
export default Track;
