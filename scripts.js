// $(function(){

//   $("#show-projects").click(function(){
//     $("#project")
//     .html("<h3 id='projects-shown'>Projects</h3><ul><li>projeect 1</li>")});

// });

//   $("#projects-shown").click(function(){
//     $("#project")
//     .html("<h3 id='show-projects'>Projects</h3>")});

$(function(){

  // $("#projects").click(function(){
  //   $("#projects-list").toggle()
  // });


  // $("#projects-list").toggle()
  $('#text-picture').hide();
  $('#sound-picture').hide();


  $("#contact-h3").click(function(){
    $("#contacts").toggle()
  });

  $("#show-resume").click(function(){
    $("#resume").toggle()
  });

  $("#resume").toggle()

  $("#contacts").toggle()

  $("#show-text-generator-picture").mouseover(function(){
    $('#resume').hide();
    $('#text-picture').fadeIn(200);
  })

   $("#show-text-generator-picture").mouseout(function(){
    $('#text-picture').hide();
  })

   $("#show-twixing-board-picture").mouseover(function(){
    $('#resume').hide();
    $('#sound-picture').fadeIn(200);
  })

   $("#show-twixing-board-picture").mouseout(function(){
    $('#sound-picture').hide();
  })

});
