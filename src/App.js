import React, { useState } from 'react';
import Searchbar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResult/SearchResult.js';
import Playlist from './components/PlayList/Playlist.js';
import TrackList from './components/TrackList/Tracklist.js';
import './App.css';

const trackLists = [{name: 'Just the way you are', artist: 'Bruno Mars', album:'album 1', id: 1},
                    {name: 'talking to the moon', artist: 'Bruno Mars', album:'album 1', id: 2},
                    {name: 'Versace', artist: 'Bruno Mars', album:'album 1', id: 3}
                  ]

function App() {
  const [playlistName, setPlaylistName] = useState([]);
  const addToPlayList = (id) => {
    const newTrack = trackLists.find((track) => track.id === id);
    setPlaylistName((prev) => [...prev, newTrack]);
  };

  return (
    <div className='mainWrapper'>
      <h1 className='title'>Ja<span className="highlight">mmm</span>ing</h1>
      <Searchbar />
      <div className='listsWrapper'>
        <SearchResults addToPlayList={addToPlayList}/>
        <Playlist playlist={playlistName} />
      </div>
    </div>


  );
}

export default App;
