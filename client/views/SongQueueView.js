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
    });
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>');
  },

  // Enqueues a song to the list
  enqueueSong: function(song) {
    this.$el.append(new SongQueueEntryView({model: song}).render());
  }

});
