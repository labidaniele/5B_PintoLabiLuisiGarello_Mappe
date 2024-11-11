function renderMap() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: maxZoom,
      attribution:
        '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    places.forEach((place) => {
      const marker = L.marker(place.coords).addTo(map);
      marker.bindPopup(`<b>${place.name}</b>`);
    });
  }
  
  renderMap();  