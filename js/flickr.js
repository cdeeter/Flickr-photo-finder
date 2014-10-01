$(document).ready(function() {

  var $submitBtn  = $("#submit"); 
  $($submitBtn).click(function(evt) {
    evt.preventDefault();
    $submitBtn.prop('disabled', true).val("Searching...");
    var searchTerm = $("#search").val();    
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: searchTerm,
      format: "json"    
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
       });
        photoHTML += "</ul>";
      $("#photos").html(photoHTML);
      $submitBtn.prop('disabled', false).val("Submit");
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });
 
  }); 
    
