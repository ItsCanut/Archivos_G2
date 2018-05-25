function initMap() {
  var sensor1 = {
    lat: 38.990796,
    lng: -0.170756

  };
  var sensor2 = {
    lat: 38.989294,
    lng: -0.170671,

  };

  var sensor3 = {
    lat: 38.99042,
    lng: -0.169591,

  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sensor1,
    center: sensor2,
    center: sensor3,
    mapTypeId: 'satellite'


  });

  var marker = new google.maps.Marker({
    position: sensor1,
    map: map,

    label: '1'



  });
  var marker = new google.maps.Marker({
    position: sensor2,
    map: map,
    label: '2'
  });
  var marker = new google.maps.Marker({
    position: sensor3,
    map: map,
    label: '3'
  });


  var triangleCoords = [{
      lat: 38.990950,
      lng: -0.171377


    },
    {
      lat: 38.988433,
      lng: -0.170854


    },
    {
      lat: 38.988766,
      lng: -0.170066


    }, {
      lat: 38.989041,
      lng: -0.170108



    },
    {
      lat: 38.989535,
      lng: -0.168804


    }, {
      lat: 38.990265,
      lng: -0.169235



    }, {
      lat: 38.990398,
      lng: -0.168696

    }, {
      lat: 38.990854,
      lng: -0.169007


    }, {
      lat: 38.990671,
      lng: -0.170034



    }, {
      lat: 38.991140,
      lng: -0.170307

    }


  ];

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#ffe200',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#ffff00',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);

}

function Campo2() {
  var sensor4 = {
    lat: 39.005868,
    lng: -0.183428

  };
  var sensor5 = {
    lat: 39.012066,
    lng: -0.181061

  };

  var sensor6 = {
    lat: 39.01056,
    lng: -0.188450


  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: sensor4,
    center: sensor5,
    center: sensor6,
    mapTypeId: 'satellite'


  });

  var marker = new google.maps.Marker({
    position: sensor4,
    map: map,

    label: '4'



  });
  var marker = new google.maps.Marker({
    position: sensor5,
    map: map,
    label: '5'
  });
  var marker = new google.maps.Marker({
    position: sensor6,
    map: map,
    label: '6'
  });


  var triangleCoords = [{
      lat: 39.010720,
      lng: -0.189926
    },
    {
      lat: 39.015409,
      lng: -0.183763
    },
    {
      lat: 39.009267,
      lng: -0.177272
    }, {
      lat: 39.004430,
      lng: -0.183452
    }
  ];

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#ebff00',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#fff500',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);




}

function Campo3() {
  var sensor7 = {
    lat: 38.985312,
    lng: -0.188607
  };
  var sensor8 = {
    lat: 38.985951,
    lng: -0.186526

  };

  var sensor9 = {
    lat: 38.984843,
    lng: -0.186036

  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sensor7,
    center: sensor8,
    center: sensor9,
    mapTypeId: 'satellite'


  });

  var marker = new google.maps.Marker({
    position: sensor7,
    map: map,

    label: '7'



  });
  var marker = new google.maps.Marker({
    position: sensor8,
    map: map,
    label: '8'
  });
  var marker = new google.maps.Marker({
    position: sensor9,
    map: map,
    label: '9'
  });


  var triangleCoords = [{
      lat: 38.985686,
      lng: -0.189044

    },
    {
      lat: 38.984163,
      lng: -0.188212

    },
    {
      lat: 38.984541,
      lng: -0.185635

    }, {
      lat: 38.986127,
      lng: -0.186214

    }, {
      lat: 38.986381,
      lng: -0.187209
    }

  ];

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#ebff00',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#fff500',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);



}

function Todos() {

  var sensor1 = {
    lat: 38.990796,
    lng: -0.170756

  };
  var sensor2 = {
    lat: 38.989294,
    lng: -0.170671,

  };

  var sensor3 = {
    lat: 38.99042,
    lng: -0.169591,

  };

  var sensor4 = {
    lat: 39.005868,
    lng: -0.183428

  };
  var sensor5 = {
    lat: 39.012066,
    lng: -0.181061

  };

  var sensor6 = {
    lat: 39.01056,
    lng: -0.188450


  };

  var sensor7 = {
    lat: 38.985312,
    lng: -0.188607
  };
  var sensor8 = {
    lat: 38.985951,
    lng: -0.186526

  };

  var sensor9 = {
    lat: 38.984843,
    lng: -0.186036

  };



  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: sensor1,
    center: sensor2,
    center: sensor3,
    center: sensor4,
    center: sensor5,
    center: sensor6,
    center: sensor7,
    center: sensor8,

    mapTypeId: 'satellite'


  });

  var marker = new google.maps.Marker({
    position: sensor1,
    map: map,

    label: '1'



  });
  var marker = new google.maps.Marker({
    position: sensor2,
    map: map,
    label: '2'
  });
  var marker = new google.maps.Marker({
    position: sensor3,
    map: map,
    label: '3'
  });

  var marker = new google.maps.Marker({
    position: sensor4,
    map: map,

    label: '4'



  });
  var marker = new google.maps.Marker({
    position: sensor5,
    map: map,
    label: '5'
  });
  var marker = new google.maps.Marker({
    position: sensor6,
    map: map,
    label: '6'
  });

  var marker = new google.maps.Marker({
    position: sensor7,
    map: map,

    label: '7'



  });
  var marker = new google.maps.Marker({
    position: sensor8,
    map: map,
    label: '8'
  });
  var marker = new google.maps.Marker({
    position: sensor9,
    map: map,
    label: '9'
  });
