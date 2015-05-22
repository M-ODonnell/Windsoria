$(document).ready(function(){
    $("#map").hide();

    /*$("a[href='#1']").on('click', function(){
        $("#mapImg").show();
        $("#map").hide();
        $("a[href='#1']").hide();
    });*/

    // initialize map
    var map = L.map("map");
    // mock data to present different layer choices
    var willisteadPark = L.marker([42.318694, -83.010447]).bindPopup('Willistead Park'),
        uAvePark = L.marker([42.321914, -83.023215]).bindPopup('University Ave. Park'),
        cadillacStPark = L.marker([42.324992, -83.001692]).bindPopup('Cadillac St. Park');
    var green = L.layerGroup([willisteadPark, uAvePark, cadillacStPark]);
    var viaRail = L.marker([42.325705, -83.009319]).bindPopup('Via Rail'),
        greyhound = L.marker([42.317328, -83.044252]).bindPopup('Greyhound'),
        ford = L.marker([42.318661, -82.993526]).bindPopup('Ford'),
        chrysler = L.marker([42.297333, -82.986574]).bindPopup('Chrysler');
    var lanspeary = L.marker([42.310188, -83.015113]).bindPopup('Lanspeary Park</br>2012</br>Acquired a lilac tree in the early morning.</br>Planted it two years later.'),
        artcite = L.marker([42.317162, -83.040213]).bindPopup('Winds[t]oria</br>2015-05-22</br>Mapping our city of desire.'),
        sorry = L.marker([42.316081, -83.045069]).bindPopup('This street corner.</br>2003</br>Turbulence.</br>I am sorry.');
    var go = L.layerGroup([viaRail, greyhound]),
        labour = L.layerGroup([ford, chrysler]),
        entryExamples = L.layerGroup([lanspeary, artcite, sorry]);
    var overlays = {
        "Green": green,
        "Go": go,
        "Labour": labour,
        "Examples": entryExamples
    };
    L.control.layers(null, overlays).addTo(map);

    $('td').on('click', function(){
        $("#mapImg").hide();
        $("#map").show();

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

        /*var myLayer = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
         attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
         maxZoom: 18
         });*/
        var myLayer = L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day.transit/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
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

