// SongQueue.js - Defines a backbone model class for the song queue.\
// --------------------------------------------------------------------------------
// 
// 
var SongQueue = Songs.extend({

  initialize: function() {
    // Listen for when a song is added to the collection. If it is, and the length
    // of the collection is now 1, we play that song immediately.
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    // Listen for the ended event, which happens when the song has finished playing.
    // In that case, we need to dequeue the song. Also, if there are any other
    // songs left in the queue, we should play the first song using `playFirst`
    this.on('ended', function() {
      this.at(0).dequeue();

      if (this.length) {
        this.playFirst();
      }
    });

    // Listens for a dequeue event, and removes the song at the top of the queue.
    this.on('dequeue', function() {
      this.remove(this.at(0));
    });
  },

  // Plays the first song on the queue when called.
  playFirst: function() {
    // this.at(0) returns the song at the top of the queue, which is a
    // model instance. So we can call play() on it.
    this.at(0).play();
  }

});