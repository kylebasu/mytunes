// SongQueueView.js - Defines a backbone view class for the song queue.
// --------------------------------------------------------------------------------
//
// When this is instantiated, the following go along with it:
// 
// this.collection - A new SongQueue collection

var SongQueueView = Backbone.View.extend({

  // Build up this view in a table element
  tagName: "table",

  // Initialize the view. Gets run immediately on instantiation
  initialize: function() {
    // Render the initial view
    this.render();

    // Listen for when something is added to the 
    this.listenTo(this.collection, 'add', function(song) {
      this.enqueueSong(song);
    }.bind(this));

    this.listenTo(this.collection, 'dequeue', function(song) {
      this.dequeueSong(song);
    }.bind(this));
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>');

    this.collection.forEach(function(song) {
      this.enqueueSong(song);
    }.bind(this));
  },

  // Enqueues a song to the list
  enqueueSong: function(song) {
    this.$el.append(new SongQueueEntryView({model: song}).render());
  },

  dequeueSong: function(song) {
    // console.log(song.$el);
    this.$el.find('tr:first').remove();
  }

});
