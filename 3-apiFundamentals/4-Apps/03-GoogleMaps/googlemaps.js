//check to see if the browser can find the geolocation information. if there is, we'll use getCurrentPosition() on that geolocation...
//if there is no geolocation, we obviously can't use it in our map, so we'll need to create a p tag on the html page and fill it with an error string,,,
//this way the user can see if there is an error
//



if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
//take the geolocation given to use from our browser as position. then we use that position info to get the lat and long to use in our LatLng constructor.
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //adding options from the googlemaps api docs. these can be played around with. link to these options is in module "options for map"
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true

    }
    //use our Map constructor to create a map on the HTML element with an id of "map_canvas" using the options we've set up
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    // document.body.appendChild(map); --------don't need this

    });
    } else {
        var para = document.createElement('p');
        para.textContent = 'Argh, no geolocation';
        document.body.appendChild(para);
    }
