// Insert Navigtation bar in site
$.get("navigation.html", function(data){
    $(".navigationBar").replaceWith(data);
});

// Insert robaLinks bar in site
$.get("robaLinks.html", function(data){
    $(".robaLinks").replaceWith(data);
});

// Content for Roba mission statement/purpose/vision

// API PRACTICE
var $content = $( "#content");
var getPosts = $.ajax("https://jsonplaceholder.typicode.com/posts");

function generatePosts( posts ){
    var $postsList = $( "<ul>" );
    var $postItems = posts
        // .filter (( post ) => post.id < 11)
        .slice(0,11) //slice can be used more efficiently than the line above
        .map(( post ) => $("<li>").text(post.title));

    return $postsList.append( $postItems );
}

function appendPosts(posts){
    var $posts = generatePosts( posts );

    $content.append( $posts );
}

getPosts.then( appendPosts );
