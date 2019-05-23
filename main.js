$(document).ready(function() {

  // var template_html = $("entry-template").html();
  // var template_function = Handlebars.compile(template_html);
  // var giocatore = (data.response[i].playerCode);
  // var falli = (data.response[i].fouls);
  // var punti = (data.response[i].points);
  // var rimbalzi = (data.response[i].rebounds);
  // var tre_punti = (data.response[i].threePoints);
  // var due_punti = (data.response[i].twoPoints);


  // var atleta = {
  //   'PlayerCode': giocatore,
  //   'Fouls': falli,
  //   'Points': punti,
  //   'Rebounds': rimbalzi,
  //   'ThreePoints': tre_punti,
  //   'TwoPoints': due_punti
  // };

  $.ajax({
    'url': 'https://www.boolean.careers/api/array/basket?n=10',
    'method': 'GET',
    'data': {

    },
    'success': function(data) {
      console.log(data);

    for (var i = 0; i < data.response.length; i++) {

       // giocatore = (data.response[i].playerCode);
       // falli = (data.response[i].fouls);
       // punti = (data.response[i].points);
       // rimbalzi = (data.response[i].rebounds);
       // tre_punti = (data.response[i].threePoints);
       // due_punti = (data.response[i].twoPoints);
       var template_html = $("entry-template").html();
       var template_function = Handlebars.compile(template_html);
       var giocatore = (data.response[i].playerCode);
       var falli = (data.response[i].fouls);
       var punti = (data.response[i].points);
       var rimbalzi = (data.response[i].rebounds);
       var tre_punti = (data.response[i].threePoints);
       var due_punti = (data.response[i].twoPoints);




      var atleta = {
        'PlayerCode': giocatore,
        'Fouls': falli,
        'Points': punti,
        'Rebounds': rimbalzi,
        'ThreePoints': tre_punti,
        'TwoPoints': due_punti
      };

      var html = template_function(atleta);
      $('.contenitore').append(html);

    }
    },
    'error': function() {
      alert('si e verificato un errore');
    }


  });


});
// console.log(data.response[i].playerCode);
// console.log(data.response[i].fouls);
// console.log(data.response[i].points);
// console.log(data.response[i].rebounds);
// console.log(data.response[i].threePoints);
// console.log(data.response[i].twoPoints);
