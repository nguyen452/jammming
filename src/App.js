import React, { useState } from 'react';
import Searchbar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResult/SearchResult.js';
import Playlist from './components/PlayList/Playlist.js';
import './App.css';
import { url, sendSearch, searchEndpoint } from './trackData.js';
import { getUserID, createPlaylist, addTracksToPlaylist } from './sendPlaylist.js';


function App() {
  const [playlistTrack, setPlaylistTrack] = useState([]);
  const [searchedTracklist, setSearchedTracklist] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');


  const addToPlayList = (id) => {
    if (playlistTrack.find((track) => track.id === id)){
      return;
    } else {
      const newTrack = searchedTracklist.find((track) => track.id === id);
      setPlaylistTrack((prev) => [...prev, newTrack]);
    }
  };

  const removeTrack = (id) => {
    //find the index of the track to be removed
    const trackIndex = playlistTrack.findIndex((track) => track.id === id);
    //set state
    setPlaylistTrack((prev) => {
      return [...prev.slice(0, trackIndex), ...prev.slice(trackIndex + 1)];
    });

  };

  const handleSearch = async(event) => {
    // get user input
    event.preventDefault();
    const userInput = event.target.elements.search.value;
    // send user input to spotify api
    const searchResult = await sendSearch(searchEndpoint, userInput, 'track');
    // update state
    setSearchedTracklist(searchResult);
    console.log(searchedTracklist);

};

const handleSendPlaylist = async (event) => {
  event.preventDefault();
  // get playlist name
  const playlistName = event.target.value;
  console.log(playlistName);
  // get user id
  const userID = await getUserID();
  // make a post request to spotify to create playlist
  const playlistID = await createPlaylist(userID, playlistName);
  // after request gets sent erase the playlist and name and start over
  const trackURIs = playlistTrack.map((track) => `spotify:track:${track.id}` );
  addTracksToPlaylist(playlistID, trackURIs);
  setPlaylistTrack([]);
  setSearchedTracklist([]);
  setPlaylistName("New Playlist");
}



  return (
    <div className='mainWrapper'>
      <nav className='navbar'>
        <h1 className='title'>Ja<span className="highlight">mmm</span>ing</h1>
        <a className='login' href={url} style={{color:"white"}}> Login</a>
      </nav>
      <Searchbar handleSearch = {handleSearch} />
      <div className='listsWrapper'>
        <SearchResults addToPlayList={addToPlayList} userSearchResults = {searchedTracklist}/>
        <Playlist playlistName = {playlistName} setPlaylistName = {setPlaylistName} playlist={playlistTrack} removeTrack={removeTrack} handleSendPlaylist = {handleSendPlaylist} />
      </div>
    </div>


  );
}

export default App;
