$(document).ready(function() {

  $.ajax({
    'url': 'https://www.boolean.careers/api/array/basket?n=10',
    'method': 'GET',
    'data': {

    },
    'success': function(data) {
      console.log(data);
      var array_oggetti = JSON.parse(data);
      console.log(array_oggetti);
    },
    'error': function() {
      alert('si e verificato un errore');
    }


  });


});
