$(document).ready(function () {
    generateQuote();

    $("#generateQuote").on("click", function (event) {
        event.preventDefault();
        generateQuote();
    });


    $("#tweetQuote").on("click", function (event) {
        event.preventDefault();
        tweetQuote();
    });
});

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function tweetQuote() {

    $("#tweetQuote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' ))");
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(quoteContent + '-' + quoteAuthor));
}


function generateQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "your Api key",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: parseQuote,

    });
}

var quoteContent = '';
var quoteAuthor = '';

function parseQuote(response) {
    var data = JSON.parse(response);
    quoteContent = data.quote;
    quoteAuthor = data.author;
    console.log(response.quote);
    console.log(quoteContent);
    console.log(quoteAuthor);
    $("#quote-content").html("<i class='fa fa-quote-left'></i>" + quoteContent + "<i class='fa fa-quote-right'></i>");
    $("#quote-author").html("<span>- </span>" + quoteAuthor);
}