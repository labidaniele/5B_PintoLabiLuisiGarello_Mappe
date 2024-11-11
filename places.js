let places = [
    {
      name: 'Parco Lambro',
      coords: [45.4968296, 9.2505173],
    },
    {
      name: 'Stazione Centrale',
      coords: [45.48760768, 9.2038215],
    },
  ];
  let zoom = 12;
  let maxZoom = 19;
  let map = L.map('map').setView(places[0].coords, zoom);