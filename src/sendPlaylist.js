import { accessToken } from "./trackData";

const getUserID = async () => {
  try {
    const endpoint = 'https://api.spotify.com/v1/me'
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    const JSONResponse = await response.json();
    return JSONResponse.id;
  } catch (err) {
    console.error(err);
  }
};

const createPlaylist = async ( userID, playlistName) => {
  try {
    const data = {
      name: playlistName,
      description: 'created using Jammming',
      public: false
    };

    const endpoint = `https://api.spotify.com/v1/users/${userID}/playlists`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const JSONResponse = await response.json();
    return JSONResponse.id;
  } catch (err) {
    console.error(err);
  }
};

const addTracksToPlaylist = async (playlistID, trackURIs) => {
  try {
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
    const data = {
      uris: trackURIs
    }
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.error(err);
  }
};



 export { getUserID, createPlaylist, addTracksToPlaylist } ;
