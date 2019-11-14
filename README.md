# TwitBot
TwitBot is a twitter bot built in node. This bot tweets a programmer's quote every hour, tweet to a user if followed and replies to tweet.  

## Packages

- [NodeJS](https://nodejs.org/en/)
- [Twit](https://www.npmjs.com/package/twit)
- [Request](https://www.npmjs.com/package/request)
- [isCool](https://www.npmjs.com/package/iscool) 

[isCool](https://www.npmjs.com/package/iscool) is not used in this bot. First planned for the bot to tweet some words and wanted to use this package to make sure these words were not offensive.

## Environment Variables

- consumer_key
- consumer_secret
- access_token
- access_token_secret

## To get started
  * Clone or download repository
      ```
      git clone https://github.com/asadadams/TwitBot
      ```
  * Install packages
      ```
      npm install    
      ```
  
 ### Useful Scripts

| Script | Description |
| ------ | ------ |
| npm start | Starts Bot|
      
## Usage
To start development server

* Start project
      ```
            node index.js
      ``` 
```
//When someone replies to bot's tweet
stream.on('tweet',function(event){
    .....

    if(replyto == TWITTERACCOUNT){
        makeTweet(`@${from} thanks for tweeting me.`);
    }
});
```
 - __TWITTERACCOUNT should be the username (eg. asadadams)__

## Me
Want to say hi? Will be happy to hear from you
* [Twitter](http:///www.twitter.com/asadadams)
* [Facebbok](http://www.facebook.com/asad.adams)
* [Instagram](http://www.instagram.com/asadadams)
* [Mail](clarkpeace.adams@gmail.com)

### [LICENSE](https://github.com/asadadams/TwitBot/blob/master/LICENSE)