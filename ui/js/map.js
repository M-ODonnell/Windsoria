$(document).ready(function(){
    $("#map").hide();
    $('#about').hide();
    $("a[href='#1']").hide();

    $("a[href='#1']").on('click', function(){
        $("#mapImg").show();
        $("#map").hide();
        $("a[href='#1']").hide();
        $("a[href='#2']").show();
        $('#about').hide();

    });

    $("a[href='#2']").on('click', function() {
        $("#map").hide();
        $("#mapImg").hide();
        $('#about').show();
        $("a[href='#2']").hide();
        $("a[href='#1']").show();
    });

    // initialize map
    var map = L.map("map");
    // mock data to present different layer choices
        var willisteadPark = L.marker([42.318694, -83.010447]).bindPopup('Willistead Park'),
        uAvePark = L.marker([42.321914, -83.023215]).bindPopup('University Ave. Park'),
        cadillacStPark = L.marker([42.324992, -83.001692]).bindPopup('Cadillac St. Park');
        var green = L.layerGroup([willisteadPark, uAvePark, cadillacStPark]);
        var overlays = {
            "Green": green
        };
        L.control.layers(null, overlays).addTo(map);

    $('td').on('click', function(){
        $("#mapImg").hide();
        $("#map").show();
        $("a[href='#1']").show();

        var latLng = [];
       
        switch (this.id) {
            case '1':
                latLng = [42.332939, -83.110171];
                break;
            case '2':
                latLng = [42.332939, -83.074637];
                break;
            case '3':
                latLng = [42.332939, -83.006144];
                break;
            case '4':
                latLng = [42.308823, -83.110171];
                break;
            case '5':
                latLng = [42.308823, -83.074637];
                break;
            case '6':
                latLng = [42.308823, -83.006144];
                break;
            case '7':
                latLng = [42.281016, -83.108626];
                break;
            case '8':
                latLng = [42.281016, -83.074637];
                break;
            case '9':
                latLng = [42.281016, -83.006144];
                break;
        }
            
        map.setView(latLng, 14);

        // L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day.transit/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {

        /*var myLayer = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        });*/
        var myLayer = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
            attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
            subdomains: '1234',
            mapID: 'newest',
            app_id: 'Y8m9dK2brESDPGJPdrvs',
            app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
            base: 'base',
            maxZoom: 18
        });
        myLayer.addTo(map);
    });
});

