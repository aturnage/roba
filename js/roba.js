// Insert Navigtation bar in site
$.get("navigation.html", function(data){
    $(".navigationBar").replaceWith(data);
});

// Insert robaLinks bar in site
$.get("robalinks.html", function(data){
    $(".robaLinks").replaceWith(data);
});

// Insert footer bar in site
$.get("footer.html", function(data){
    $(".footer").replaceWith(data);
});

// Content for Roba mission statement/purpose/vision
var $missionTitle = $(".missionTitle");
var $missionContent = $(".missionContent");
var $purposeTitle = $(".purposeTitle");
var $purposeContent = $(".purposeContent");
var $visionTitle = $(".visionTitle");
var $visionContent = $(".visionContent");

var missionTitle = "Our Mission"
var missionContent = "To revitalize Baden through beautification, crime prevention, community and economic development while promoting the City of Baden for business/economic development and home ownership."
var purposeTitle = "Our Purpose"
var purposeContent = "To provide a voice and effective means of conveying the concerns of business owners and residents and create and maintain transparency with business owners and residents regarding issues related to; Crime & Safety, Social & Economic Development, Residential & Commercial Development, Education, Arts & Culture, Historic Preservation, Problem Properties, Mobility and Community Benefits Agreements, for the enjoyment and fulfillment of the Neighborhood’s business owners and residents."
var visionTitle = "Our Vision"
var visionContent = ["To work with residents to foster a strong sense of community and welcoming environment for visitors",
                    "To produce programs and events that celebrate our community and bring neighbors together",
                    "To advocate for the community around issues of land use, infrastructure, traffic and beautification",
                    "To develop and implement neighborhood resource programs for youth and seniors",
                    "To foster and implement programs for business and economic development",
                    "To develop and maintain favorable relations with government officials"
                    ]

$missionContent
    .text(missionContent)
    .css("color","gray");

$purposeContent
    .text(purposeContent)
    .css("color","gray");

// Controls all titles with title tag
$(".title")
    .css("text-align", "center")
    .css("color","#35bab9")
    .css("list-style", "none")
    .css("display", "inline");


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
