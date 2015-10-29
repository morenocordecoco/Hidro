//document.write('<script type="text/javascript" src="SIGER/EstacaoConsulta.php"></script>');
var bebe = $.ajax({
    type: "_POST",
    url: "SIGER/EstacaoConsulta.php",
    data: {result: 'Intenger',
    success: function(data){}
    }
});


//Definições do mapa
var map;
function initialize() {
    var latlng = new google.maps.LatLng(-6.860985433763648, -56.90869140625);
    var options = {
        zoom: 6,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("mapa"), options);
}
initialize();


//Carrega os marcadores de bacias do arquivo pontos.json
function carregarPontos() {
    $.getJSON('js/pontos.json', function(pontos) {
        $.each(pontos, function(index, ponto) {
 
            var marker = new google.maps.Marker({
            position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
            title: "Meu ponto personalizado! :-D",
            map: map,
            icon: 'img/marcador.png'
            });         
        });
    });
}



// Marcador Santarem;
  var latlngSantarem = new google.maps.LatLng(-2.4506291, -54.7009228);
  var mapOptions = {
  
};
carregarPontos();

// Marcador personalizado;
  var image = src='img/marcador.png';
  var marcadorSantarem = new google.maps.Marker({
  position: latlngSantarem,
  map: map,
  icon: image,
  title: "SANTAREM",
  animation: google.maps.Animation.DROP
});

    

// Parâmetros do texto que será exibido no clique;
  var contentStringS = '<h2>SANTAREM</h2>' + bebe + '<p>Cota: </p>'  + '<a href="http://pt.wikipedia.org/wiki/Pra%C3%A7a_Rio_Branco_(Recife)" target="_blank">clique aqui para mais informacoes</a>';
 
  var infowindowS = new google.maps.InfoWindow({
  content: contentStringS,
  maxWidth: 700
});
 
// Exibir texto ao clicar no pin;
google.maps.event.addListener(marcadorSantarem, 'click', function() {
  infowindowS.open(map,marcadorSantarem);
});





// Exibir ponto MANAUS;
  var latlngManaus = new google.maps.LatLng(-3.1190275, -60.02173140000002);
  var mapOptions = {
  
};
carregarPontos();

// Marcador personalizado;
  var image = src='img/marcador.png';
  var marcadorManaus = new google.maps.Marker({
  position: latlngManaus,
  map: map,
  icon: image,
  title: "MANAUS",
  animation: google.maps.Animation.DROP
});

// Parâmetros do texto que será exibido no clique;
  var contentStringM = '<h2>MANAUS</h2>' + '<p>Cota: </p>' + '<a href="http://pt.wikipedia.org/wiki/Pra%C3%A7a_Rio_Branco_(Recife)" target="_blank">clique aqui para mais informacoes</a>';
 
  var infowindowM = new google.maps.InfoWindow({
  content: contentStringM,
  maxWidth: 700
});
 
// Exibir texto ao clicar no pin;
google.maps.event.addListener(marcadorManaus, 'click', function() {
  infowindowM.open(map,marcadorManaus);
});






// Exibir ponto RIO BRANCO;
  var latlngRiobranco = new google.maps.LatLng(-9.975377, -67.82489770000001);
  var mapOptions = {
  
};
carregarPontos();

// Marcador personalizado;
  var image = src='img/marcador.png';
  var marcadorRiobranco = new google.maps.Marker({
  position: latlngRiobranco,
  map: map,
  icon: image,
  title: "RIO BRANCO",
  animation: google.maps.Animation.DROP
});

// Parâmetros do texto que será exibido no clique;
  var contentStringRB = '<h2>RIO BRANCO</h2>' + string_array + '<p>Cota: </p>' + '<a href="http://pt.wikipedia.org/wiki/Pra%C3%A7a_Rio_Branco_(Recife)" target="_blank">clique aqui para mais informacoes</a>';
 
  var infowindowRB = new google.maps.InfoWindow({
  content: contentStringRB,
  maxWidth: 700
});

 
// Exibir texto ao clicar no pin;
google.maps.event.addListener(marcadorRiobranco, 'click', function() {
  infowindowRB.open(map,marcadorRiobranco);
});
