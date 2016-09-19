var venueMap;
function init() {

    var pinCenterLocation1 = new google.maps.LatLng(26.2734036,12.762838);
    var delhiLocation = new google.maps.LatLng(28.6472784,76.8123828);        //NEW DELHI LOCATION
    var sanFranciscoLocation = new google.maps.LatLng(37.7576793,-122.5076403);
    var texasLocation = new google.maps.LatLng(33.0612425,-96.806666);
    var torontoLocation = new google.maps.LatLng(43.7181557,-79.5181428);
    var londonLocation = new google.maps.LatLng(51.4384535,-0.5444065);
    var singaporeLocation = new google.maps.LatLng(1.3147268,103.7069306);
    var mumbaiLocation = new google.maps.LatLng(19.061839,72.8342493);

  var mapOptions = {
    zoom: 2,
    center: pinCenterLocation1,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,

    styles: [
      {
        stylers: [
          { hue: "#00ff6f" },
          { saturation: -50 }
        ]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          { hue: "#ff6600" },
          { saturation: +80 }
        ]
      }, {
        featureType: "transit",
        elementType: "labels",
        stylers: [
          { hue: "#ff0066" },
          { saturation: +80 }
        ]
      }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#c4f4f4" }
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
  };
    


  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var delhiPosition = new google.maps.Marker({    // Create a new marker
    position: delhiLocation,                        // Set its position
    map: venueMap,                                // Specify the map
    icon: "images/orange.png"                            // Path to image from HTML
  });
    
    var sanFranciscoPosition = new google.maps.Marker({    // Create a new marker
    position: sanFranciscoLocation,                        // Set its position
    map: venueMap,                                // Specify the map
    icon: "images/orange.png"                            // Path to image from HTML
  });
    
    var texasPosition = new google.maps.Marker({    // Create a new marker
    position: texasLocation,                        // Set its position
    map: venueMap,                           // Path to image from HTML
    icon: "images/orange.png" 
  });
    
    var torontoPosition = new google.maps.Marker({    // Create a new marker
    position: torontoLocation,                        // Set its position
    map: venueMap,                           // Path to image from HTML
    icon: "images/orange.png" 
  });
    
    var londonPosition = new google.maps.Marker({    // Create a new marker
    position: londonLocation,                        // Set its position
    map: venueMap,                           // Path to image from HTML
    icon: "images/orange.png" 
  });
    
    var singaporePosition = new google.maps.Marker({    // Create a new marker
    position: singaporeLocation,                        // Set its position
    map: venueMap,                           // Path to image from HTML
    icon: "images/black.png" 
  });
    
    var mumbaiPosition = new google.maps.Marker({    // Create a new marker
    position: mumbaiLocation,                        // Set its position
    map: venueMap,                           // Path to image from HTML
    icon: "images/black.png" 
  });
    var centerPosition = new google.maps.Marker({    // Create a new marker
    position: pinCenterLocation1,                        // Set its position
    map: venueMap,                           // Path to image from HTML
    icon: "images/" 
  });
    var infowindow = new google.maps.InfoWindow({
      content: delhi
    });
    
    //console.log($('img'));
    delhiPosition.addListener('click', function() {
        
        venueMap.setZoom(8);
        venueMap.setCenter(delhiPosition.getPosition());
        infowindow.open(venueMap, delhiPosition);
    });
    
    var sfInfowindow = new google.maps.InfoWindow({
      content: sanFrancisco
    });
    
    sanFranciscoPosition.addListener('click', function() {
        
        venueMap.setZoom(8);
        venueMap.setCenter(sanFranciscoPosition.getPosition());
        sfInfowindow.open(venueMap, sanFranciscoPosition);
    });
    
    var texasInfowindow = new google.maps.InfoWindow({
      content: texas
    });
    
    texasPosition.addListener('click', function() {
        
        venueMap.setZoom(8);
        venueMap.setCenter(texasPosition.getPosition());
        texasInfowindow.open(venueMap, texasPosition);
    });
    
    var torontoInfowindow = new google.maps.InfoWindow({
      content: toronto
    });
    
    torontoPosition.addListener('click', function() {
        
        venueMap.setZoom(8);
        venueMap.setCenter(torontoPosition.getPosition());
        torontoInfowindow.open(venueMap, torontoPosition);
    });
    
    var londonInfowindow = new google.maps.InfoWindow({
      content: london
    });
    
    londonPosition.addListener('click', function() {
        
        venueMap.setZoom(8);
        venueMap.setCenter(londonPosition.getPosition());
        londonInfowindow.open(venueMap, londonPosition);
    });
    
    var singaporeInfowindow = new google.maps.InfoWindow({
      content: singapore
    });
    
    singaporePosition.addListener('click', function() {
        
        venueMap.setZoom(8);
        venueMap.setCenter(singaporePosition.getPosition());
        singaporeInfowindow.open(venueMap, singaporePosition);
    });
    
    var mumbaiInfowindow = new google.maps.InfoWindow({
      content: mumbai
    });
    
    mumbaiPosition.addListener('click', function() {
        
        venueMap.setZoom(8);
        venueMap.setCenter(mumbaiPosition.getPosition());
        mumbaiInfowindow.open(venueMap, mumbaiPosition);
    });
    
    venueMap.addListener('center_changed', function() {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(function() {
        venueMap.panTo(centerPosition.getPosition());
          venueMap.setZoom(2);
          infowindow.close();
          sfInfowindow.close();
          torontoInfowindow.close();
          texasInfowindow.close();
          mumbaiInfowindow.close();
          singaporeInfowindow.close();
          londonInfowindow.close();
      }, 8000);
    });

}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBf-zRypW_Fwh44ORYovRAvkYAdOwMsk2k&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;