// AppView.js - Defines a backbone view class for the whole music app.
// --------------------------------------------------------------------------------
// 
// 
var AppView = Backbone.View.extend({

  // Initialize the view, which gets run on instance creation
  initialize: function(params){
    // Set up the plater view
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    
    // Set up the library view
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    
    // Set up the song queue view
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // console.log(this.model.get('currentSong'));
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
