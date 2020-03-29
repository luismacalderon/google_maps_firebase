//var locations = [];
var map = new google.maps.Map();

function initMap() {
   var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
   // var puntosReportados = [
   //    { lat: 13.0664228, lng: -86.3148985 },
   //    { lat: 13.0999968, lng: -86.4005916 },
   //    { lat: 12.1191251, lng: -86.2149785 },
   //    { lat: 12.0520143, lng: -86.2595507 },
   //    { lat: 12.6784014, lng: -84.9410021 },
   //    { lat: 11.5516803, lng: -84.3668783 },
   // ];

   map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      datalessRegionColor: 'transparent',
      zoom: 8,
      center: { lat: 12.775459, lng: -84.7766034 },
      //gestureHandling: //'cooperative', //none

      // restriction: {
      //    latLngBounds: {
      //       north: 14.9260255,
      //       south: 10.7350269,
      //       west: 166.28,
      //       east: 12.8959837},
      //    strictBounds: false,
      // },
   });

   setlocations();

}

function setlocations(){
   firebase.initializeApp({
      apiKey: 'AIzaSyBwktlV8z4iTnzcRvt1G5Tvu3BqpRgi5tE',
      authDomain: 'prueba-crud-e8b9d.firebaseapp.com',
      projectId: 'prueba-crud-e8b9d'
   });

   var db = firebase.firestore();

   db.collection("formularios").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: { lat: doc.data().location.latitude, lng: doc.data().location.longitude },
            icon: {
               path: google.maps.SymbolPath.CIRCLE,
               strokeWeight: 7,
               strokeColor: 'red',
               fillColor: 'black',
               scale: 2,
            },
            map: map,
            title: 'Nicaragua'
         })
      });
   });
}

initMap();