var request = require('superagent')
var endpoint = 'https://election-tweets-dev.herokuapp.com/api/v1/tweets'
var h = require('hyperscript')

module.exports = {
  getTweets
}

function getTweets() {
request.get(endpoint)
  .end(function (err, tweetData) {
    if (err) return console.log('This is the error '. err)
    var tweetInfo = tweetData.body.tweets[1]
    var things = renderTweets(tweetInfo)
    if (tweetInfo.subject === "Trump") {
      document.getElementById('don').appendChild(things)
    } else {
      document.getElementById('hil').appendChild(things)
    }
  })
}

function renderTweets(tweetInfo) {
  console.log("THIS IS TWEET OBJECT", tweetInfo);
  var author = tweetInfo.author
  var tweet = tweetInfo.text
  var city = tweetInfo.city
  var date = tweetInfo.date
  var subject = tweetInfo.subject
  console.log("THIS IS THE SUBJECT", subject)
  console.log("THIS IS THE DATE", date);
  // console.log('This is the tweet ', tweet);
  if (subject === "Trump") {
    return h('div', {id: 'donTweets'}, [
      h('p', {id: 'tweet'}, tweet),
      h('p', {id: 'author'}, author),
      h('p', {id: 'city'}, city),
      h('p', {id: 'date'}, date)])
  } else {
    return h('div', {id: 'hilTweets'}, [
      h('p', {id: 'tweet'}, tweet),
      h('p', {id: 'author'}, author),
      h('p', {id: 'city'}, city),
      h('p', {id: 'date'}, date)])
  }
}

// var parent = document.getElementById('hilTweets')
// var text = document.createTextNode(tweet)
// return parent.appendChild(text)
