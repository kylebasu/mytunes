// App.js - Defines a backbone model class for the whole app.
// --------------------------------------------------------------------------------
// 
// When AppModel gets instantiated, it accepts the following paramaters:
// 
// library - A Songs collection based on the dummy data.js file
// 
// We also set up some properties directly here, making them accessible via the `get`
// method. The properties are:
// 
// currentSong - a SongModel instance that represents the current song being played
// songQueue - a SongQueue collection that represents all the songs in queue
// 
// We also listen for some events here, that in turn fire off other events.

var AppModel = Backbone.Model.extend({

  // Initialize. This gets run as soon as the instance is created
  initialize: function(params){
    // Set up two new instances of currentSong and songQueue on our app model
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    
    var isPlaying = false;

    // Listen for the play event on the library (gets fired on collection as well as model)
    params.library.on('play', function(song) {
      if(!isPlaying) {
        this.set('currentSong', song);
        isPlaying = true;
      }
    }, this);

    // Listen for the enqueue event on the library (gets fired on collection as well as model)
    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
    }, this);

    params.library.on('ended', function(song) {
      isPlaying = false;
    }, this);
  }

});
