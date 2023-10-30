const path = require('path');
const express = require('express');


// create an express app
const app = express();

// tell node to use json and HTTP header features in body-parser
app.use(express.json());

// handle requests for static resources

app.use(express.static(__dirname+'/public'));

app.get('/DJStyle.css', function(req, res) {
  res.sendFile(__dirname + "/" + "DJStyle.css");
});





//home tab
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/DJHomepage.html'));
});

//playlist tab
app.get('/DJPlaylist.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/DJPlaylist.html'));
});

//timeslot tab
app.get('/DJTimeSlot.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/DJTimeSlot.html'));
});
 
// Use express to listen to port
let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});