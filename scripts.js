
$(function(){

  $('#text-picture').hide();
  $('#sound-picture').hide();
  $('#click-picture').hide();

  $("#contact-h3").click(function(){
    $("#contacts").toggle()
  });

  $("#contacts").toggle()

  $("#show-text-generator-picture").mouseover(function(){
    $('#text-picture').fadeIn(200);
  })

   $("#show-text-generator-picture").mouseout(function(){
    $('#text-picture').hide();
  })

   $("#show-twixing-board-picture").mouseover(function(){
    $('#sound-picture').fadeIn(200);
  })

   $("#show-twixing-board-picture").mouseout(function(){
    $('#sound-picture').hide();
  })

$("#show-click-picture").mouseover(function(){
    $('#click-picture').fadeIn(200);
  })

   $("#show-click-picture").mouseout(function(){
    $('#click-picture').hide();
  })
});
