var request = require('superagent')
var endpoint = 'https://election-tweets-dev.herokuapp.com/api/v1/tweets'
var h = require('hyperscript')
var renderTweets = require('./renderTweets')

module.exports = {
  getTweets
}

function getTweets() {
request.get(endpoint)
  .end(function (err, tweetData) {
    if (err) return console.log('This is the error '. err)
    var tweetsArray = (tweetData.body.tweets).length
    var trump = true
    var hillary = true
    for (var i = 0; i < tweetsArray; i++) {
      var tweetInfo = tweetData.body.tweets[i]
      var things = renderTweets(tweetInfo)

      console.log('This is the subject ',tweetInfo.subject);
      if (tweetInfo.subject === "trump" && trump === true) {
        document.getElementById('don').appendChild(things)
        trump = false
      } else if (tweetInfo.subject === "hillary" && hillary === true){
        document.getElementById('hil').appendChild(things)
        hillary = false
      } else if  (trump === false && hillary === false) {
        return
      } else {
        continue

      }
    }
  })
}



// var parent = document.getElementById('hilTweets')
// var text = document.createTextNode(tweet)
// return parent.appendChild(text)
