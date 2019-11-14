var Twit = require('twit');
var Request = require("request");
const {consumerKey,consumerSecret,accessToken,accessTokenSecret} = require('./config');

console.log('Twitbot started');

var T = new Twit({
  consumer_key:         consumerKey,
  consumer_secret:      consumerSecret,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret
});

var stream = T.stream('user');
//When someone follows the bot
stream.on('follow',function(event){
    var name = event.source.name;
    var screenName = event.source.screen_name;
    makeTweet(`@${screenName} You are really awesome. Full stack/Backend/Frontend`);
});

//When someone replies to bot's tweet
stream.on('tweet',function(event){
    var replyto = event.in_reply_to_screen_name;
    var tweet = event.text;
    var from = event.user.screen_name;

    if(replyto == TWITTERACCOUNT){
        makeTweet(`@${from} thanks for tweeting me.`);
    }
});

//Tweeting
callTwitBot();
setInterval(callTwitBot,1000*60*60); // Tweet every hour

function callTwitBot(){
    Request.get("https://programming-quotes-api.herokuapp.com/quotes/random", (error, response, body) => {
        if(error) {
            return console.log(`Error fetching quote ${error}`);
        }
        var Quote =  JSON.parse(body);
        var tweet = `${Quote.en} by ${Quote.author}`;
        console.log(`Generated tweet: ${tweet}`);
        makeTweet(tweet);
    });
}

function makeTweet(tweet){
    T.post('statuses/update', { status: tweet }, function(err, data, response) {
        if(err){
            console.log("Something went wrong");
        }else{
            console.log(`Tweet done: ${data}`);
        }
    })
}