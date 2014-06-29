// $(function(){

//   $("#show-projects").click(function(){
//     $("#project")
//     .html("<h3 id='projects-shown'>Projects</h3><ul><li>projeect 1</li>")});

// });

//   $("#projects-shown").click(function(){
//     $("#project")
//     .html("<h3 id='show-projects'>Projects</h3>")});

$(function(){

  $("#projects").click(function(){
    $("#projects-list").toggle()
  });


  $("#projects-list").toggle()

  $("#contact-h1").click(function(){
    $("#contacts").toggle()
  });


  $("#contacts").toggle()
});
