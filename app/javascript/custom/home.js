//= require jquery

// Loads all Semantic javascripts
//= require semantic-ui

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
})