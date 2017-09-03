$(document).ready(function(){
    $("#map").hide();
    $("a[href='#1']").hide();

    $("a[href='#1']").on('click', function(){
        $("#mapImg").show();
        $("#map").hide();
        $("a[href='#1']").hide();

    });

    $('td').on('click', function(){
        $("#mapImg").hide();
        $("#map").show();
        $("a[href='#1']").show();

        var latLng = [];
        //var map = L.map("map");
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
        //alert(latLng);
        //map.setView(new L.LatLng(lat, lng), 14);
        var map = L.map("map").setView(latLng, 12);

        L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map).redraw();
    });

	

	
});

