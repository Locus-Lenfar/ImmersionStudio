$(function(){
$('#home').click(function(){
  $.ajax({
    type: "POST",
    url: 'content/home.html',
    success: function(e) {
       $('#content').html(e);
    }
  });
});
$('#about').click(function(){
  $.ajax({
    type: "POST",
    url: 'content/about.html',
    success: function(f) {
       $('#content').html(f);
    }
  });
});
$('#project').click(function(){
  $.ajax({
    type: "POST",
    url: 'content/project.html',
    success: function(h) {
       $('#content').html(h);
    }
  });
});
});
