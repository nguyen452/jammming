import React, { useState } from "react";
import { trackLists } from "../../trackData.js";
import Tracklist from "../TrackList/Tracklist.js";
import "./SearchResult.css";


function SearchResults({addToPlayList, userSearchResults}) {



    return (
        <div className="searchResult">
            <h2 className="resultTitle">Results</h2>
            <Tracklist addToPlayList={addToPlayList}  userSearchResults={userSearchResults}/>
        </div>
    )
}

export default SearchResults;
