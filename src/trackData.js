const client_id = 'e928427831834fdc9dce2c364501f7af';
let url = 'https://accounts.spotify.com/authorize';
const redirect_uri = 'https://spotjammming.netlify.app';

url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent('playlist-modify-private');
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);


// after user logged in
const startingIndex = window.location.hash.indexOf('=');
const endingIndex = window.location.hash.indexOf('&');
const accessToken = window.location.hash.substring(startingIndex + 1, endingIndex);

// function for search

//1.take value stored in searchbar
//2. send that value to spotify api to search
//3. and set that data to a variable called track

const searchEndpoint = 'https://api.spotify.com/v1/search';

const sendSearch = async(endpoint, userEntry, types) => {
     let urlEndpoint = endpoint + `?q=${encodeURIComponent(userEntry)}&type=${types}`;
     const searchResponse = await fetch(urlEndpoint, {
          method: 'GET',
          headers: {
               authorization: `Bearer ${accessToken}`
          }
     });
     const searchJson = await searchResponse.json(); // convert to json
     const tracksArray = searchJson.tracks.items;
     // map through the array and return an array of objects with the following properties: name, artist, album, id;
     return tracksArray.map((track) => {
          return {name: track.name, artist: track.artists[0].name, album: track.album.name, id: track.id};
     });
};



export { url, sendSearch, accessToken, searchEndpoint };
