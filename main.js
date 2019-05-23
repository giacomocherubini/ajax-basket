$(document).ready(function() {

  $.ajax({
    'url': 'https://www.boolean.careers/api/array/basket?n=10',
    'method': 'GET',
    'data': {

    },
    'success': function(data) {
      console.log(data);

      for (var i = 0; i < data.response.length; i++) {


         var template_html = $("#entry-template").html();
         var template_function = Handlebars.compile(template_html);


         var atleta = {
           'PlayerCode': data.response[i].playerCode,
           'Fouls': data.response[i].fouls,
           'Points': data.response[i].points,
           'Rebounds': data.response[i].rebounds,
           'ThreePoints': data.response[i].threePoints,
           'TwoPoints': data.response[i].twoPoints
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
