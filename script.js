$(function(){

  var postData = {};

  $.get('https://www.reddit.com/r/aww/.json', function(data){
    console.log(data);
    postData = data;

    for (var i = 0; i<10; i++){
     var info = postData.data.children[i].data;

       $("#container").append('<div class="post">'
      + '<img src="' + info.thumbnail + '">'
      + '<p class="title">' + info.title + '</p>'
      + '<p class="author">' + info.author + '</p>'
      + '<p class="comments">' + info.num_comments + " comments" + '</p>'
      + '</div>');



               }



  });

});

// console.log(info.title);
// console.log(info.author);
// console.log(info.thumbnail) thumbnail=picture img src;
// console.log(info.num_comments);

// NOTE: wrote a simpler for loop to better organize and see the process removed sumbit info and added "i" to be looped
// var title = []
//  responseBody.data.children[2].data.title
//  console.log(title);
//
//              $.get('https://www.reddit.com/r/aww/.json').done(function(responseBody){
//                console.log(responseBody.data.children.data).forEach(function(post){
//                post.data.title;
//                post.data.author;
//                post.data.submit;
//                post.data.num_comments;
// $(function() {
//
// var postData = {};
// $.get('https://www.reddit.com/r/aww/.json', function(data) {
// console.log(data);
//
// postData = data;
// var redditInfo = postData.data.children;
// for(var i = 0; i < 10; i++){
//
//
// var redImage =
// var redTitles = $('<h1>').text(redditInfo[i].data.title);
// $('body').append(redTitles);
// var redAuthor = $('<p>').text(redditInfo[i].data.author);
// $('body').append(redAuthor);
// var redComments = $('<p>').text(redditInfo[i].data.num_comments);
// $(‘body’).append(redComments);  } }); });
