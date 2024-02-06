function initMap() {
    var coordinates = [
      {lat: 40.38031458397467, lng: 49.84925676945667},
      {lat: 40.376741051366054, lng: 49.956125824783165},
      {lat: 40.39763516177458, lng: 49.95512159983386},
      {lat: 40.41659998493887, lng: 49.964640741871435},
      {lat: 40.38550590238793, lng: 49.80311829547735},
      {lat: 40.44665828042294, lng: 49.75057952844856},
      {lat: 40.58063089387791, lng: 49.680141946805755},
      {lat: 40.69544919843517, lng: 46.389628048059635}
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 40.5, lng: 49.8} // Merkez koordinatı istediğiniz bir değer olarak değiştirebilirsiniz
    });

    var marker, i;

    for (i = 0; i < coordinates.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coordinates[i].lat, coordinates[i].lng),
        map: map
      });
    }
  }
