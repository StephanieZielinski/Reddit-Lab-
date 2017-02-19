$(function(){

  var postData = {};

  $.get('https://www.reddit.com/r/aww/.json', function(data){
    console.log(data);

    postData = data;




    for (var i = 0; i<11; i++){
     var info = postData.data.children[i].data;

     // console.log(info.title);
     // console.log(info.author;
     // console.log(info.thumbnail);
     // console.log(info.num_comments);

    $("#container").append('<div class="listing">'
      + '<img src="' + info.thumbnail + '">'
      + '<p class="title">' + info.title + '</p>'
      + '<p class="author">' + info.author + '</p>'
      + '<p class="comments">' + info.num_comments + " comments" + '</p>'
      + '</div>');



               }



  });

});
