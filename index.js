const axios = require("axios");
const Twitter = require("twitter-lite");


const postImg = async(client_id, consumerKey, secretKey, accessKey, accessSecretKey) => {
    const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=${client_id}`);
    const img = res.data.links.html;

    const client = new Twitter({
        subdomain: "api",
        version: "1.1",
        consumer_key: consumerKey,
        consumer_secret: secretKey,
        access_token_key: accessKey,
        access_token_secret: accessSecretKey
    });

    await client
        .post("statuses/update", { status: img })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}

//Enter Authorization codes here: 
const clientId = ""
const twitterConsumerKey = ""
const twitterSecretKey = ""
const twitterAccessKey = ""
const accessSecretKey = ""

postImg(clientId, twitterConsumerKey, twitterSecretKey, twitterAccessKey, accessSecretKey)