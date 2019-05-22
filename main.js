$(document).ready(function() {

  $.ajax({
    'url': 'https://www.boolean.careers/api/array/basket?n=10',
    'method': 'GET',
    'data': {

    },
    'success': function(data) {
      console.log(data);
    for (var i = 0; i < data.response.length; i++) {
      console.log(data.response[i].playerCode);
      console.log(data.response[i].fouls);
      console.log(data.response[i].points);
      console.log(data.response[i].rebounds);
      console.log(data.response[i].threePoints);
      console.log(data.response[i].twoPoints);
    }
    },
    'error': function() {
      alert('si e verificato un errore');
    }


  });


});
