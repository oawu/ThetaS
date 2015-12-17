/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */
 
$(function () {
  var $map = $('<div />').attr ('id', 'map');
  var _map = null;
  $('<div />').addClass ('map').append ($('<i />')).append ($('<i />')).append ($('<i />')).append ($('<i />')).append ($map).appendTo (window.body);

  function inFailDemoData (token) {
    var picture = window.pictures.filter (function (t) {
      return t.token == token;
    });

    return picture[0] ? picture[0] : null;
  }
  function getLocation (token, done) {
    var picture = inFailDemoData (token);

    if (picture)
      return done ({ status: true, picture: { latitude: 25.04, longitude: 121.55 }, zoom: 11 });

    $.ajax ({
      url: window.apis.getLocationUrl,
      data: { token: token },
      async: true, cache: false, dataType: 'json', type: 'GET',
      beforeSend: function () {}
    })
    .done (function (result) {
      if (!result.status)
        done ({ status: true, picture: { latitude: 25.04, longitude: 121.55 }, zoom: 11 });

      done (result);
    })
    .fail (function (result) {
      done ({ status: true, picture: { latitude: 25.04, longitude: 121.55 }, zoom: 11 });
    })
    .complete (function (result) {});
  }

  function initialize () {
    var hash = window.location.hash.trim ().slice (1);
    
    getLocation (hash, function (result) {
      var latLng = new google.maps.LatLng (result.picture.latitude, result.picture.longitude);

      _map = new google.maps.Map ($map.get (0), {
          zoom: result.picture.zoom,
          zoomControl: true,
          scrollwheel: true,
          scaleControl: true,
          mapTypeControl: false,
          navigationControl: true,
          streetViewControl: false,
          disableDoubleClickZoom: true,
          center: latLng,
        });
      
      new google.maps.Marker ({
          map: _map,
          draggable: false,
          position: latLng,
        });
      window.hideLoading ();
    });
  }

  google.maps.event.addDomListener (window, 'load', initialize);
});