require('dotenv').config(); //For env variables
module.exports = {
    consumerKey: process.env.consumer_key,
    consumerSecret: process.env.consumer_secret,
    accessToken: process.env.access_token,
    accessTokenSecret: process.env.access_token_secret,
}