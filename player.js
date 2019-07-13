$(document).ready(function(){   
    var tour
    $.getJSON("guide.json", function(result){
        tour = new Tour($.extend({}, {
            backdrop: true,
            backdropContainer: 'body',
            backdropPadding: 0,
        }, result));
      });
    $(".explore").on("click", function(){
       tour.start(true);
    })
});

