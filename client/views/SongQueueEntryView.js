// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
// --------------------------------------------------------------------------------
// 
// When this gets instantiated, the following get passed along:
// 
// this.model - a SongModel

var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
  
});
