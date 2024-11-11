function aggiungiMarker(){
    const input = document.getElementById('text');
    const myToken = 'XXXXXXXXXX';
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(
        'https://us1.locationiq.com/v1/search?q=' + input + '&key=' + myToken, options
    )
    .then((res) =>{
        return res.text();
    })
    .then((data) =>{
        let str = new String(data);
        let latsrc = str.match(/lat='([0-9,-]+)'/); //trova all'interno della stringa lat i caratteri dentro la parentesi
        let lonrsc = str.match(/lon='([0-9,-]+)'/); //trova all'interno della stringa lon i caratteri dentro la parentesi
        let namesrc = str.match(/display_name='([^']+)'/) //cerca il dysplay name che poi uscirà nel marker
        places.push({
            name: namesrc[1],
            coords: [latsrc[1],lonrsc[1]],
        });
        renderMap();
    })
    .catch((err) => console.error());
}