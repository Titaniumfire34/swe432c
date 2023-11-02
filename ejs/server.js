const path = require('path');
const express = require('express');


// create an express app
const app = express();
app.set('view engine','ejs');
// tell node to use json and HTTP header features in body-parser
app.use(express.json());

// handle requests for static resources

app.use(express.static(__dirname+'/public'));

app.get('/DJStyle.css', function(req, res) {
  res.sendFile(__dirname + "/pages/DJStyle.css");
});





//home tab
app.get('/', function(req, res) {
  res.render('pages/DJHomepage');
});


//timeslot tab
app.get('/DJTimeSlot', function(req, res) {
  let playlists = [
    {
        Name: "Playlist christmas",
        description: "jolly jolly christmas",
    },
    {
        Name: "Playlist halloween",
        description: "scary",
    },
    {
        Name: "lofi playlist",
        description: "lofi songs",
    },
    {
        Name: "Playlist 1st",
        description: "first try",
    },
    {
        Name: "new year playlist",
        description: "to start off the year",
    },
    {
        Name: "summer playlist",
        description: "summer relaxer",
    }]
  res.render('pages/DJTimeSlot', {playlists: playlists});
});

//playlist tab
app.get('/DJPlaylist', function(req, res) {
  res.render('pages/DJPlaylist');
});
// Use express to listen to port
let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});